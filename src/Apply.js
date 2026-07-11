import React, {useState} from 'react'
import "./Apply.css"
import { db } from "./firebase"
import { storage } from "./firebase";
import{
    collection,
    addDoc,
    serverTimestamp,
} from "firebase/firestore"

import{
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage"

function Apply() {

    const [formData, setFormData] = useState({
    fullName:"",
    email:"",
    gender:"",
    dob:"",
    occupation:"",
    district:"",
    reason:"",
    interests: [],
   });

   const [loading, setLoading] = useState(false);
   const [success, setSuccess] = useState("");
   const [error, setError] = useState("");
   const [passport, setPassport] = useState(null);
   const [preview, setPreview] = useState(null);

   const handlePassport = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  setPassport(file);
  setPreview(URL.createObjectURL(file));
};

const removePassport = () => {
  setPassport(null);
  setPreview(null);
};

   const interestOptions =[
    "Savings",
    "Loans",
    "Investments",
    "Financial Education",
    "Business Support",
   ];

   const handleChange = (e)=> {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
   };

   const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked){
        setFormData({
            ...formData,
            interests:[...formData.interests, value],
        });
    } else{
        setFormData({
            ...formData,
            interests: formData.interests.filter(
                (item) => item !==value
            ),

        });
    }
   };

   const submitApplication = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    let passportURL = "";
    if(passport){
        const storageRef = ref(
            storage,
            'passports/${Date.now()}_${passport.name}'

        );
        await uploadBytes(storageRef, passport);
        passportURL = await getDownloadURL(storageRef);
    }

    try{
        await addDoc(collection(db, "applications"),{
            ...formData,
            passport: passportURL,
            status:"pending",
            createdAt: serverTimestamp(),
        });

        setSuccess(
            "Application submitted successfully, we shall contact you soon"
        );

        setFormData({
            fullName:"",
            email:"",
            phone:"",
            gender:"",
            dob:"",
            occupation:"",
            district:"",
            reason:"",
            interests:[],

        });
    } catch(err){
        console.log(err);
        setError("Failed to submit application");
    }
    setLoading(false);
   };

   return(
    <section className='apply-page'>
        <div className='apply-card'>
            <div className='apply-header'>
                <h1>Become a shineUp member</h1>

                <p>Complete the application below and start your financial journey with shineUp sacco</p>
            
            </div>
            <form onSubmit={submitApplication}>

                <div className='upload-section'>
                    <label className='upload-title'>
                        passport photo

                    </label>

                    <label className='upload-box'>
                        {
                            preview ?
                            <div className='preview-container'>
                                <img
                                src={preview}
                                alt='passport Preview'
                                className='preview-image'/>

                                <p>{passport.name}</p>

                                <button type='button' className='remove-btn' onClick={removePassport}>
                                    Remover Photo

                                </button>

                            </div>
                            :
                            <>
                            <div className='camera-icon'>📷</div>
                            <h3>Drag and drop passport photo</h3>
                            <p>or Click to Browse</p>
                            </>
                        }

                        <input
                        type='file'
                        accept='image/*'
                        hidden
                        onChange={handlePassport}/>

                    </label>

                </div>

                
                <div className='grid'>
                    <input type='text'
                    name='fullName'
                    placeholder='Full Name'
                    value={formData.fullName}
                    onChange={handleChange}
                    required/>

                    <input type='email'
                    name='email'
                    placeholder='Email Address'
                    value={formData.email}
                    onChange={handleChange}
                    required/>


                    <input type='tel'
                    name='phone'
                    placeholder='Phone Number'
                    value={formData.phone}
                    onChange={handleChange}
                    required/>


                    <select
                    name='gender'
                    value={formData.gender}
                    onChange={handleChange}
                    required>

                        <option value="">Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>other</option>

                    </select>

                    <input
                    type='date'
                    name='dob'
                    value={formData.dob}
                    onChange={handleChange}
                    required/>

                    <input
                    type='text'
                    name='occupation'
                    placeholder='Occupation'
                    value={formData.occupation}
                    onChange={handleChange}
                    required/>

                    <input
                    type='text'
                    name='district'
                    placeholder='District'
                    value={formData.district}
                    onChange={handleChange}
                    required/>
                    
                </div>

                <h3>Select your interests</h3>

                <div className='interest-grid'>

                    {interestOptions.map((item) =>(
                        <label key={item}>
                            <input
                        type='checkbox'
                        value={item}
                        checked={formData.interests.includes(item)}
                        onChange={handleCheckbox}/>

                        {item}
                    </label>
                ))}

            </div>

            <textarea
            rows="6"
            name='reason'
            placeholder='Why do you want to join the circle'
            value={formData.reason}
            onChange={handleChange}
            required/>

            {success && <p className='success'>{success}</p>}
            {error && <p className='error'>{error}</p>}

            <button type='submit' disabled={loading}>
                {loading ? "submitting...." : "submit Application"}
            </button>


        </form>


        </div>

    </section>
   );

}

export default Apply
