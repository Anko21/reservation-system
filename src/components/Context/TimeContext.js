import { createContext, useContext,useState } from "react";

//Manipulating timeslots(projects requirement)

    const TimeContext= createContext(undefined);
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }
    const fetchAPI = function() {
        ////const currDate=date
        const dt=new Date()
        let random = seededRandom(dt.getDate());
    // console.log(random())
        let result = [];
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result
    };

    const submitAPI = function(formData) {
        return "true";
    };
    const  timeSlots=fetchAPI()
    const confirmation=submitAPI()

    const TimesProvider=({children})=>{
        const [timeList ] = useState(timeSlots)
        const [bookConf ] = useState(confirmation)
    return (
            <TimeContext.Provider value={{timeList,bookConf}}>
                {children}
            </TimeContext.Provider>
        )
}

export const useTimesListContext=()=>useContext(TimeContext);

export default TimesProvider;
