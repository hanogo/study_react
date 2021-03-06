import React, { useCallback } from "react";
import {Button, Form, Input} from "antd";
import Link from "next/link";
import {useInput} from "../pages/signup";

const LoginForm = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const onSubmitForm = useCallback((e) => {
        console.log({
            id, password,
        });
    }, [id, password]);

    return (
        <>
        <Form onFinish={onSubmitForm}>
            <div>
                <label htmlFor={"user-id"}>아이디</label>
                <br/>
                <Input name={"user-id"} required value={id} onChange={onChangeId}/>
            </div>
            <div>
                <label htmlFor={"user-id"}>비밀번호</label>
                <br/>
                <Input name={"user-id"} type={"password"} required  value={password} onChange={onChangePassword}/>
            </div>
            <div>
                <Button type={"primary"} htmlType={"submit"} loading={false}>로그인</Button>
                <Link href={"/signup"}><a><Button>회원가입</Button></a></Link>
            </div>
        </Form>
        </>
    );
};

export default LoginForm;