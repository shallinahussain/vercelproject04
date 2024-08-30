import Image from 'next/image';

const Page = () => {
    return (
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img
                className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src="/sarah-dayan.jpg"
                alt=""
                width="384"
                height="512"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                {/* Your additional content here */}
            </div>
        </figure>
    );
};

export default Page;