import React, {FC} from 'react';
import Header from "../components/organisms/header/Header";
import Footer from "../components/organisms/footer/Footer";

type Props = {
    className?: string;
}

const TemplatePage: FC<Props> = ({children, className}) => {
    return (
        <main className={"flex flex-row w-full bg-slate-900 text-white"}>
            <div className={"flex flex-col w-full"}>
                <Header/>
                <section className={`px-20 w-full max-w-screen-xl m-auto ${className !== undefined ? className : ""}`}>
                    {children}
                </section>
                <Footer />
            </div>

        </main>
    );
};

export default TemplatePage;