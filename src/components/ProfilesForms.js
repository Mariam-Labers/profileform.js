import React from 'react'

function ProfilesForms({submit}) {
    const [profile, setprofile] = usestate({
        firstname: "",
        lastname: "",
        email: "",
        phone: ""
         
    });

    const handler = (event) => {
        setprofile((prev) => ({
            ...pre,
            [Event.target.name]: event.target.value
            const handleForm = (e) => {
                
                e.preventDefault();
                SubmitEvent(profile)
            }
        }
            return (
                <div className='"formContainer'>
                    <h3>Profile Forms</h3>
                    <form>
                        <fieldset
                        <legend>Bio data</legend>
                        <div className="name">
                        </label>firstname
                        <input name="firstname" value=
                            {profile.firstname} type="text" onchange={handler} />
                    </label>last Name
                    <lable
            < inputname="value"
                <div className="name">
                        

        })
}
export default ProfilesForms