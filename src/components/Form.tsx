import { useForm, FieldValues } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data: FieldValues) => {
    console.log(data);
  };
  
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className='myform bg-white mx-auto p-4 m-4 shadow rounded'
    >
      <div className='mb-3'>
        <label className='form-label' htmlFor='name'>
          Name:
        </label>
        <input
          {...register('name', { required: true, minLength: 3 })}
          id='name'
          className='form-control'
          type='text'
        />
        { errors.name?.type === 'required' && <p className='text-danger'>Name is required</p> }
        { errors.name?.type === 'minLength' && <p className='text-danger'>At least 3 characters</p> }
      </div>
      <div className='mb-3'>
        <label className='form-label' htmlFor='age'>
          Age:
        </label>
        <input
          {...register('age', { valueAsNumber: true, required: true, min: 12 })}
          id='age'
          className='form-control'
          type='number'
        />
        { errors.age?.type ==='required' && <p className='text-danger'>Age is required</p> }
        { errors.age?.type ==='min' && <p className='text-danger'>Age must be at least 12</p> }
      </div>
      <button className='btn btn-primary' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default Form;
