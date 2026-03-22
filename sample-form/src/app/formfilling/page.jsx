"use client";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const InputFieldgroup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);


        const { error } = await supabase
            .from('form')
            .insert([{ name, email }]);

        setLoading(false);



        if (error) {
            alert(error.message);
        } else {
            alert('form submitted success');
            setName("");
            setEmail("");
        }
    };

    const handleReset = () => {
        setName("");
        setEmail("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    placeholder="Jordan Lee"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div orientation="horizontal">
                <button onSubmit={handleReset} type="reset" variant="outline">
                    Reset
                </button>
                <button
                    type="submit"
                    disabled={loading}
                >{loading ? "submitting...." : "submitted"}</button>
            </div>
        </form>
    )
}
export default InputFieldgroup;
