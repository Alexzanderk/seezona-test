import React from 'react';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import { BounceLoader } from 'react-spinners';

import Alert from './Alert';
import { formatTemperature } from '../utils/formatTemperature';

import './styles.sass';

const WeatherInfo = ({ loading, alert, weather: { weather, unit } }) => {
	return (
		<div className="info">
			{!loading && weather ? (
				<div>
					{weather.code === undefined ? (
						<div className="weather">
							<h1>{weather.name}</h1>
							<img
								src={`http://openweathermap.org/img/w/${
									weather.weather[0].icon
								}.png`}
								alt={weather.weather[0].description}
							/>
							<div className="props tempMin">
								<span>Temperature</span>
								<FontAwesome
									className="w-ico "
									name="temperature-high"
								/>
							</div>
							<div className="value">
								{weather.main.temp} {formatTemperature(unit)}
							</div>

							<div className="props tempMin">
								<span>Min.temperature</span>
								<FontAwesome
									className="w-ico "
									name="temperature-low"
								/>
							</div>
							<div className="value">
								{weather.main.temp_min}{' '}
								{formatTemperature(unit)}
							</div>

							<div className="props tempMax">
								<span>Max.temperature</span>
								<FontAwesome
									className="w-ico "
									name="temperature-high"
								/>
							</div>
							<div className="value">
								{weather.main.temp_max}{' '}
								{formatTemperature(unit)}
							</div>

							<div className="props humidity">
								<span>Wind</span>
								<FontAwesome className="w-ico " name="wind" />
							</div>
							<div className="value">
								{weather.wind.speed} m/s
							</div>

							<div className="props humidity">
								<span>Humidity</span>
								<FontAwesome className="w-ico " name="water" />
							</div>
							<div className="value">
								{weather.main.humidity} %
							</div>

							<div className="props pressure">
								<span>Pressure</span>
								<FontAwesome className="w-ico " name="weight" />
							</div>
							<div className="value">
								{weather.main.pressure} hpa
							</div>

							<div className="props sunrise">
								<span>Sunrise</span>
								<FontAwesome className="w-ico " name="sun" />
							</div>
							<div className="value">
								{moment(weather.sys.sunrise).format('LT')}
							</div>

							<div className="props sunset">
								<span>Sunset</span>
								<FontAwesome className="w-ico " name="moon" />
							</div>
							<div className="value">
								{moment(weather.sys.sunset).format('LT')}
							</div>
						</div>
					) : (
						<Alert
							alert={alert}
							message={weather.message}
							isVisible={alert}
						/>
					)}
				</div>
			) : (
				<div className="preloader-container">
					<BounceLoader
						sizeUnit={'px'}
						size={60}
						color={'#123abc'}
						loading={loading}
					/>
				</div>
			)}
		</div>
	);
};

export default WeatherInfo;
