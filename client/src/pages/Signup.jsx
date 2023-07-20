import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import SignupForm from "../components/SignupForm";

export default function Signup() {
    return(
        <div className="h-screen flex flex-col justify-between">
            <Navbar />
            <SignupForm />
            <Footer />
        </div>
    );
}