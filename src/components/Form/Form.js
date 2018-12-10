import React from 'react';
import FormFields from './FormFields';

import './style.sass';

const Form = ({alert, state, change, submitForm}) => {
	return (
		<div className="search">
			<h1>Look the weather in your city!</h1>
			<form className="form-search" onSubmit={submitForm}>
				<FormFields
					alert={alert}
					formdata={state.formdata.city}
					change={change}
				/>
				<FormFields
					formdata={state.formdata.units}
					change={change}
				/>
			</form>
		</div>
	);
};

export default Form;
