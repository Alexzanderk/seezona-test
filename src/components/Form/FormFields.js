import React from 'react';

const FormFields = ({ formdata, change, alert }) => {
	const renderTemplate = () => {
		let formTemplate = null;
		switch (formdata.element) {
			case 'input':
				formTemplate = (
					<label
						data-test="component-formfield"
						className="input"
						htmlFor={formdata.config.name}
					>
						<input
							className={alert ? 'error' : ''}
							id={formdata.config.name}
							{...formdata.config}
							placeholder=" "
							onChange={e => change(e)}
							value={formdata.value}
						/>
						<span className="label">
							{formdata.config.placeholder}
						</span>
						<span className="border" />
					</label>
				);
				break;

			case 'select':
				formTemplate = (
					<select
						data-test="component-formfield"
						value={formdata.value}
						name={formdata.config.name}
						onChange={e => change(e)}
					>
						{formdata.config.options.map((item, i) => (
							<option
								disabled={i === 0 ? true : false}
								key={i}
								value={item[1] ? item[1] : ''}
							>
								{item[0]}
							</option>
						))}
					</select>
				);
				break;

			default:
				formTemplate = null;
				break;
		}
		return formTemplate;
	};

	return <div>{renderTemplate()}</div>;
};

export default FormFields;
