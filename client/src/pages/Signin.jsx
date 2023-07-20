import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SigninForm from "../components/SigninForm";

export default function Signin() {
    return(
        <div className="h-screen flex flex-col justify-between">
            <Navbar />
            <SigninForm />
            <Footer />
        </div>
    );
}