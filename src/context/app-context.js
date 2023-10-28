import { createContext, useContext, useState } from "react";
// import { data as initialData } from "../Data/DummyData";

const defaultProviderValues = {};

const AppContext = createContext(defaultProviderValues);

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [userToken, setUserToken] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [selectedLecture, setSelectedLecture] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [all, setAll] = useState("");

  const [batch, setBatch] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [note, setNote] = useState("");
  const [room, setRoom] = useState("");
  const [teacher, setTeacher] = useState("");
  const [subject, setSubject] = useState("");
  // const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState("");
  const [lecCreated, setLecCreated] = useState("");

  const [MyData, SetMyData] = useState([]);
  const [MyDataNew, SetMyDataNew] = useState([]);
  const [MyDataProfile, SetMyDataProfile] = useState([]);
  const [BatchData, SetBatchData] = useState([]);

  const [openCreate, setOpenCreate] = useState(false);
  const [studentId, setStudentId] = useState([]);
  const [tokenNew, setTokenNew] = useState([]);
  const [presentStudent, setPresentStudent] = useState(0);
  const [absentStudent, setAbsentStudent] = useState(0);
  const [totalStudent, setTotalStudent] = useState();
  const [ReflectSubmit, setReflectSubmit] = useState("Submit");

  const [department, SetDepartment] = useState([]);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userToken,
        setUserToken,
        search,
        setSearch,
        data,
        setData,
        selectedLecture,
        setSelectedLecture,
        filterData,
        setFilterData,
        all,
        setAll,

        batch,
        setBatch,
        from,
        setFrom,
        to,
        setTo,
        note,
        setNote,
        room,
        setRoom,
        teacher,
        setTeacher,
        subject,
        setSubject,
        date,
        setDate,
        lecCreated,
        setLecCreated,

        MyData,
        SetMyData,
        MyDataNew,
        SetMyDataNew,
        BatchData,
        SetBatchData,
        MyDataProfile,
        SetMyDataProfile,

        openCreate,
        setOpenCreate,
        studentId,
        setStudentId,

        tokenNew,
        setTokenNew,

        presentStudent,
        setPresentStudent,
        absentStudent,
        setAbsentStudent,
        totalStudent,
        setTotalStudent,

        ReflectSubmit,
        setReflectSubmit,

        department,
        SetDepartment,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
