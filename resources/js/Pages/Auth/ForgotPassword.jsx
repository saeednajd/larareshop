import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-600 text-right">
                رمز عبور خودتون رو فراموش کردید؟ مشکلی نیست! فقط کافیه ایمیلی که باهاش ثبت
                نام کردید رو وارد کنید تا ما ایمیلی حاوی لینک ریست پسورد براتون ارسال کنیم
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="flex flex-row-reverse items-center justify-between mt-4">
                    <PrimaryButton className="ms-4 bg-red-500 hover:bg-red-900" disabled={processing}>
                        ریست کردن پسورد
                    </PrimaryButton>
                    <Link
                    href={route('Home')}
                    className="hover:text-blue-500 transition-colors duration-300"
                >
                    بازگشت به خانه
                </Link>
                </div>
                
                
            </form>

        </GuestLayout>
    );
}
