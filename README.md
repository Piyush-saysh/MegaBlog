

1)  {authStatus && ()} agr authstatus true hoga tbhi ye parenthesis wala run krega

2)  {options?.map((option)=>(    // ? agr value hongi options mai to he loop krega wrna nhi 
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}


3) import { useForm } from 'react-hook-form'
    const {register, handleSubmit} = useForm()


......            <form onSubmit={handleSubmit(login)}
        className='mt-8' >
            <div className="space-y-5">
                <Input 
                    label = "Email: "
                    placeholder = "Enter your email"
                    type ="email"
                    {...register("email",{
                        required:true,
                        validate:{
                            matchPatern:(value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                        }
                    })}
                />
                <Input 
                    label= "Password: "
                    type ="password"
                    placeholder ="Enter your password"
....                    {...register("password",{
                        required:true
                    })}
                />
                 <Button
                    type="submit"
                    className="w-full"
                    >Sign in
                </Button>

            </div>
        </form>


        register humesa spread kr ke he use krn hoga wrna wo dusro ki proerty overwrite kr dega or handlesubmit ek event ki trha hota hai usme tum ek define function daal do 
