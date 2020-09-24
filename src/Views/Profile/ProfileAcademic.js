import React, { Fragment } from "react";
import NavBar from "../../Components/MenuUser/index"
import { Link, withRouter } from 'react-router-dom'
import DatePicker,{registerLocale}from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es';
import { useForm } from "react-hook-form";
import './index.css';

registerLocale("es", es);

const ProfileAcademic = (props) => { 
    const [startDate, setStartDate] = React.useState('');

    const { handleSubmit} = useForm();

    const onSubmit = (values) => { 
        console.log(values);
        props.history.push('/')
    } 

    const onlyNumbers= (e)=> {
        let key = window.event ? e.which : e.keyCode;
            if (key < 48 || key > 57) {
            e.preventDefault();
    }
  }
    return (
        <Fragment>
            <NavBar/>
            <div className="row justify-content-center row-no-magin">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                <div>
                    <h1 className='h1-title-form'>COMPLETA TU REGISTRO</h1>
                </div>
                <h1 className='h1-form'>Estudios</h1>
                <form name="myForm" onSubmit= { handleSubmit(onSubmit)} className='form-container-info'>
                    <p className= "text-form-academic">Ingresa los datos del último nivel de estudios que alcanzaste.</p>
                <label className="label-form mt-1">         
                        Nivel máximo alcanzado
                        <div className="form-check my-2">
                            <input className="form-check-input"
                             type="radio" 
                             name="doc" 
                             id="dni" 
                             value="option1"
                             autoComplete="off"
                             />
                            <label className="form-text-check mb-2">
                                Primaria completa
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input"
                             type="radio" 
                             name="doc" 
                             id="carnet" 
                             value="option2"
                             required=""
                             autoComplete="off"
                             />
                            <label className="form-text-check">
                                Secundaria completa
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input"
                             type="radio" 
                             name="doc" 
                             id="pasaporte" 
                             value="option3"
                             required=""
                             autoComplete="off"
                             />
                            <label className="form-text-check">
                                Estudios técnicos
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input"
                             type="radio" 
                             name="doc" 
                             id="pasaporte" 
                             value="option3"
                             required=""
                             autoComplete="off"
                             />
                            <label className="form-text-check">
                                Estudios universitarios
                            </label>
                        </div>
                    </label>
                    <label className="label-form mt-4">
                        Institución educativa
                        <input
                            placeholder ="Maria" 
                            className="form-control placeholder"                               
                            id='firstName'
                            name='firstName'
                            type="text"
                            autoComplete="off"
                            requerid=""
                        />
                    </label>
                    <label className="label-form mt-1">
                        Especialidad
                        <input
                            placeholder="Pérez"
                            className="form-control placeholder mb-2"
                            id='lastName'
                            name='lastName'
                            type="text"
                            autoComplete="off"
                            requerid=""
                        />
                    </label>
                    <label 
                        for= "nombre"
                        className=" label-form mt-1">
                        Fecha de inicio
                        <div className="customDatePickerWidth">
                            <DatePicker 
                            name='dateOfBirth'
                            type="text"
                            pattern="[0-9]+"
                            requerid=""
                            selected={startDate}
                            autoComplete="off" 
                            onChange={date => setStartDate(date)}
                            placeholderText="DD/MM/AAAA"
                            locale="es"
                            className="form-control label-form-calen icon-calendar" 
                        />
                        </div>
                    </label>
                    <label 
                        for= "nombre"
                        className=" label-form mt-3">
                        Fecha de fin
                        <div className="customDatePickerWidth">
                            <DatePicker 
                            name='dateOfBirth'
                            type="text"
                            pattern="[0-9]+"
                            requerid=""
                            selected={startDate}
                            autoComplete="off" 
                            onChange={date => setStartDate(date)}
                            placeholderText="DD/MM/AAAA"
                            locale="es"
                            className="form-control label-form-calen icon-calendar" 
                        />
                        </div>
                    </label>
                    <section  className="container-buttons-form">
                        <Link
                            className="btn-cancel-form btn" 
                            type= 'submit' 
                            to='/inicio'
                            >
                            CANCELAR
                        </Link> 
                        <button
                            className="button-continue btn icon-next" 
                            type= 'submit' 
                            >
                            CONTINUAR 
                        </button> 
                    </section>                      
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default withRouter(ProfileAcademic)
