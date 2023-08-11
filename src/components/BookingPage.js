import '../App.css'
import {useReducer} from "react";
import {useTimesListContext } from './Context/TimeContext';
import {useNavigate } from "react-router-dom";
import {useUserDetailsContext} from "./Context/UserContext"
import BookingForm from './BookingForm'


//This component is the booking forms' state.
//Based on the project's requirements I used a useReducer hook to
//manage timeslots and ensure that no double bookings will occur

    const reducer=(timeSlots,action)=>{
        switch (action.type){
          case "booked" :
            return timeSlots.filter((elem)=>elem !== action.payload.time)
          default:
            return timeSlots
        }
      }

function BookingPage(){
    const {values, handleChange,radioChange,setValues}=useUserDetailsContext();
    const {timeList,bookConf} = useTimesListContext();
    const initialTime=timeList
    const [timeSlots,dispatch]= useReducer(reducer,initialTime)
    const navigate=useNavigate();

    const submitForm = () => {
        if (bookConf==="true"){
            navigate("/usersDetails")
    }}
    const handleSubmit=(e)=>{
       e.preventDefault();
       dispatch({type:"booked", payload:{time:values.time}});

        submitForm()
    }
    return (
        <>
        <BookingForm
        date={values.date}
        time={values.time}
        diners={values.diners}
        ocassion={values.occasion}
        standard={values.standard}
        outside={values.outside}
        handleChange={handleChange}
        radioChange={radioChange}
        handleSubmit={handleSubmit}
        timeSlots={timeSlots}
        dispatch={dispatch}
        />
        </>
    )
}

export default BookingPage;




//Another way of validation
// const formValidation=()=>{
//     return(
//     values.date !=="date" &&
//     values.time !=="time" &&
//     values.diners!=="diners" &&
//     values.occasion!== "occasion"
//     )}