import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import FormStart from '../../forms/form-start/form-start';
import PersonalInfo from '../../forms/personal-info/personal-info';
import Address from '../../forms/address/address';
import Rezult from '../../forms/rezult/rezult';

// const quizSteps = ['PersonalInfo', 'Address', 'Rezult'];

const Form = () => {
  const [formValues, setFormValues] = useState({});
  const [formStep, setformStep] = useState(0);
  const history = useHistory();

  const addFormData = (data) => {
    setFormValues({...formValues, ...data});
    nextStep(formStep + 1);
  };

  const nextStep = (step) => {
    console.log('nextStep', step);
    if (step > 0) {
      history.push(`/step/${step}`);
    } else {
      history.push(`/`);
    }
    setformStep(step);
  };

  // const createRoutesForm = (quizSteps) => {
  //   return (
  //     quizSteps.map((stepName, i) => {
  //       switch (stepName) {
  //         case 'PersonalInfo':
  //           return <Route path={`/step/${i}`} component={<PersonalInfo clickHandleSubmit={addFormData}/>} key={i}/>
  //         case 'Address':
  //           return <Route path={`/step/${i}`} component={<Address clickHandleSubmit={addFormData}/>} key={i}/>
  //         case 'Rezult':
  //           return <Route path={`/finish`} component={<Rezult data={formValues} />} key={i}/>
  //         default:
  //           break;
  //       }
  //     })
  //   )
  // };

  return (
    <>
        <Route exact path='/' render={() => <FormStart clicStart={() => nextStep(1)}/>}/>
        {/* {createRoutesForm(quizSteps)} */}
        <Route path='/step/:id'
            render={({match}) => {
              switch (match.params.id) {
                case '1':
                  return <PersonalInfo clickHandleSubmit={addFormData} data={formValues} clickBack={() => nextStep(0)}/>
                case '2':
                  return <Address clickHandleSubmit={addFormData} data={formValues} clickBack={() => nextStep(1)}/>
                case '3':
                  return <Rezult data={formValues} clickBack={() => nextStep(2)} clickReplay={() => nextStep(0)}/>
                default:
                  return <Rezult data={formValues} clickBack={() => nextStep(2)} clickReplay={() => nextStep(0)}/>;
              }
            }}
        />
    </>
  );
};

export default Form;
