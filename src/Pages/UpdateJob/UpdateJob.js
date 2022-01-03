import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import 'moment/locale/it.js';
import DatePicker from "react-multi-date-picker";

const style = {
    padding: "20px",
    width: "100%",
    marginBottom: "8px",
    borderColor: "#6c757d"
}

const UpdateJob = () => {
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // data.email = user?.email;
        // fetch("https://infinite-garden-01511.herokuapp.com/offers", {
        //     method: "POST",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(data),
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             alert('Successfully Added');
        //             reset();
        //         }
        //     });
        // console.log(data);
    };

    return (
        <div className="my-5">
            <div className="w-100 m-auto my-3">
                <h3 className="text-center text-danger">Please, Update This Job</h3>
                <div className="border ">
                    <div className="my-3">


                        <form onSubmit={handleSubmit(onSubmit)}>

                            <select {...register("category")} className="form-select p-2 ms-5 w-75 border border-secondary rounded" aria-label="Default select example">
                                <option selected>Select Category</option>
                                <option value="Customer Service">Customer Service</option>
                                <option value="Designer">Designer</option>
                                <option value="Developer">Developer</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Sales">Sales</option>
                            </select>


                            <select {...register("job type")} className="form-select p-2 ms-5 mt-2 w-75 border border-secondary rounded" aria-label="Default select example">
                                <option selected>Job Type</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                            </select>



                            <input {...register("title")} placeholder="Job Title" className="p-2 my-2 ms-5 w-75 border border-secondary rounded" />
                            <br />

                            <div className="ms-5 w-75 d-flex justify-content-between">
                                <Controller
                                    control={control}
                                    name="date"
                                    rules={{ required: true }} //optional
                                    render={({
                                        field: { onChange, name, value },
                                        fieldState: { invalid, isDirty }, //optional
                                        formState: { errors }, //optional, but necessary if you want to show an error message
                                    }) => (
                                        <div className='w-100'>
                                            <DatePicker
                                                style={style}
                                                placeholder='Publish Date'
                                                value={value || ""}
                                                onChange={(date) => {
                                                    onChange(date?.isValid ? date : "");
                                                }}
                                            />
                                            {errors && errors[name] && errors[name].type === "required" && (
                                                //if you want to show an error message
                                                <span>your error message !</span>
                                            )}
                                        </div>
                                    )}
                                />


                                <Controller
                                    control={control}
                                    name="date"
                                    rules={{ required: true }} //optional
                                    render={({
                                        field: { onChange, name, value },
                                        fieldState: { invalid, isDirty }, //optional
                                        formState: { errors }, //optional, but necessary if you want to show an error message
                                    }) => (
                                        <div className='w-100'>
                                            <DatePicker
                                                style={style}
                                                placeholder='Deadline'
                                                value={value || ""}
                                                onChange={(date) => {
                                                    onChange(date?.isValid ? date : "");
                                                }}
                                            />
                                            {errors && errors[name] && errors[name].type === "required" && (
                                                //if you want to show an error message
                                                <span>your error message !</span>
                                            )}
                                        </div>
                                    )}
                                />
                            </div>



                            <textarea {...register("requirements")} placeholder="Job Requirements" className="p-2 ms-5 w-75 border border-secondary rounded" />
                            {/* <br /> */}
                            <input {...register("company")} placeholder="Company Name" className="p-2 ms-5 w-75 border border-secondary rounded" />
                            <br />


                            <input {...register("image", { required: true })} placeholder="Logo Link" className="p-2 my-2 ms-5 w-75 border border-secondary rounded"
                            />
                            <br />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input style={{ marginLeft: '168px' }} type="submit" value="Submit Job" className="btn btn-danger fw-bold w-25" />
                        </form>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default UpdateJob;