import React, { useState, useEffect } from "react";
import {Typography} from "antd";
import {Octokit} from "@octokit/core";

const {request} = new Octokit({auth: `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`});

export function AboutPage() {
    const githubProfileData = useGithubData('glebka35')
    return (
        <div>
            <Typography.Title>
                О нас
            </Typography.Title>
            <Typography.Paragraph>
                Имя: {githubProfileData.name}
            </Typography.Paragraph>
            <Typography.Paragraph>
                О себе: {githubProfileData.bio}
            </Typography.Paragraph>
            <Typography.Paragraph>
                Почта: {githubProfileData.email}
            </Typography.Paragraph>
        </div>
    )
}

function useGithubData(username) {
    const [data, setData] = useState({
        name: "",
        bio: "",
        email: ""
    })
    useEffect(() => {
        request(`GET /users/${username}`, {
            username: 'username'
        }).then(result => {
            setData(result.data)
        })
    }, [username]);
    return data
}