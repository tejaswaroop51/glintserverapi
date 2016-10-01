/**
 * Created by Tejaswaroop on 10/1/16.
 */

import express from 'express';
import logger from '../../logger';
import security from '../../utils/securityheaders';
import serverData from '../../utils/util';
import configs from '../../utils/constants';

const DataGen = new express.Router();

security(DataGen);


// simple data fetch
/**
 * Output Type: JSON
 * [{
 *    "id":0,
 *    "year":2012,
 *    "product":"Server",
 *    "country":"JAPAN",
 *    "revenue":100000
 * },
 * {..additionalProps}
 * ]
 * * **/

DataGen.post('/datafetch', (req, res, next) => {
    serverData(configs.url, (err, data) => {
        if(err) {
            logger.error('Unable to process data');
            res.json({error: 'Internal Server error to process data!!!!', code: '500'});
        } else {
            logger.info('success!!!');
            res.json(data);
        }
    });
});

module.exports = DataGen;
