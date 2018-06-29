import React from 'react';
import Card from '../card';
import mysql_img from '../../../images/mysql.svg'
import postgres_img from '../../../images/postgres.svg'
// import mongo_img from '../../../images/mongo.svg'
// <Card name='mongoDB' image={mongo_img} />
import doctrine_img from '../../../images/doctrine.svg'
import hibernate_img from '../../../images/hibernate.svg'
import sequelize_img from '../../../images/sequelize.svg'

class DataBaseCards extends React.Component {
    render() {
        return (
            <div className='cards-container'>
                <Card name='mySQL' image={mysql_img} />
                <Card name='postgreSQL' image={postgres_img} />
                <Card name='Doctrine (ORM)' image={doctrine_img} />
                <Card name='Hibernate (ORM)' image={hibernate_img} />
                <Card name='Sequelize (ORM)' image={sequelize_img} />
            </div>
        )
    }
}

export default DataBaseCards;
