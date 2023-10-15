import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {ExternalLinks} from "../mols/ExternalLinks";
import {Skeleton} from "antd";

const UserName = styled.p({
    fontSize: '150%',
    textAlign: 'center',
});

const Description = styled.p({
    marginTop: 60,
    textAlign: 'center',
    color: '#555',
});

export const Profile = ({userInfo}) => {
    const lineBrakedDescriptions = userInfo.description ? userInfo.description.split(/(\n)/).map((item) => {
        return (
            <p>{item}</p>
        )
    }) : '';

    return (
        <>
            <UserName style={{marginTop: 50}}>{userInfo.name}</UserName>
            <ExternalLinks links={userInfo.links}/>
            <Skeleton loading={userInfo.description === undefined}>
                <Description>
                    {lineBrakedDescriptions}
                </Description>
            </Skeleton>
        </>
    )
}

Profile.propTypes = {
    userInfo: PropTypes.object,
}

Profile.defaultProps = {
    userInfo: {
        name: 'ユーザー',
        description: 'ユーザー説明',
        links: {
            blog: '#',
            twitter: '#',
            pixiv: '#',
            skeb: '#',
            gitHub: '#',
        }
    }
}
