import React from 'react';
import Card from '../../ui/card';
import mysql_img from '../../../images/mysql.svg'
import postgres_img from '../../../images/postgres.svg'
import mongo_img from '../../../images/mongo.svg'

class DataBaseCards extends React.Component {
    render() {
        return (
            <div className='cards-container'>
                <Card name='mySQL' image={mysql_img} />
                <Card name='postgreSQL' image={postgres_img} />
                <Card name='mongoDB' image={mongo_img} />
            </div>
        )
    }
}

export default DataBaseCards;
