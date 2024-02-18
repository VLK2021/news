import React from 'react';

const UserNews = ({country}) => {


    return (
        <main className={`width`}>
            <p>User News {country}</p>
            {country}
        </main>
    );
};

export {UserNews};