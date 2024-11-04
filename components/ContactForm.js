import React, { useState } from "react";
import axios from "axios";

export default () => {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });
    const [inputs, setInputs] = useState({
        email: "",
        message: "",
    });
    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            });
            setInputs({
                email: "",
                message: "",
            });
        } else {
            setStatus({
                info: { error: true, msg: msg },
            });
        }
    };
    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        });
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
            method: "POST",
            url: "https://formspree.io/f/xdkoevja",
            data: inputs,
        })
            .then((response) => {
                handleServerResponse(
                    true,
                    "Appreciate your message, and I will get back to you soon."
                );
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error);
            });
    };
    return (
        <main>
            <h3>Send a message</h3>
            <form onSubmit={handleOnSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="_replyto"
                        onChange={handleOnChange}
                        required
                        value={inputs.email}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        onChange={handleOnChange}
                        required
                        value={inputs.message}
                    />
                </div>
                <button
                    type="submit"
                    disabled={status.submitting}
                    className="btn solid white"
                >
                    {!status.submitting
                        ? !status.submitted
                            ? "Submit"
                            : "Submitted"
                        : "Submitting..."}
                </button>
            </form>
            {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
                <div className="status">{status.info.msg}</div>
            )}
        </main>
    );
};
