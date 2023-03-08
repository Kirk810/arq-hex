const magic = require('../../utils/magic');
const enum_ = require('../../utils/enum');
const odmMovie = require('../odm/odm-movie');

exports.getAll = async (req, res) => {
    let status = 'Success',
        errorcode = '',
        message = '',
        data = '',
        statuscode = 0,
        response = {};
    try {
        let respOdm = await odmMovie.getAll();
        if (respOdm.err) {
            (status = 'Failure')
                (errorcode = respOdm.err.code),
                (message = respOdm.err.message),
                (statuscode = enum_.CODE_BAD_REQUEST);
        } else {
            (message = 'Success Responde'),
                (data = respOdm),
                (statuscode = data.length > 0 ? enum_.CODE_OK : enum_.CODE_NO_CONTENT);
        }
        response = await magic.ResponseService(status, errorcode, message, data);
        return res.status(statuscode).send(response);
    } catch (err) {
        console.log('err = ', err);
        response = await magic.ResponseService(
            'Failure',
            enum_.CRASH_LOGIC,
            err,
            ''
        );
        return res.status(enum_.CODE_INTERNAL_SERVER_ERROR).send(response);
    }
};

exports.Create = async (req, res) => {
    let status = 'Success',
        errorcode = '',
        message = '',
        data = '',
        statuscode = 0,
        response = {};
    try {
        const Title = req.body.Title;
        const Poster = req.body.Poster;
        if (Title && Poster) {
            let respOdm = await odmMovie.Create(Title, Poster);
            if (respOdm.err) {
                (status = 'Failure'),
                    (errorcode = respOdm.err.code),
                    (message = respOdm.err.message),
                    (statuscode = enum_.CODE_BAD_REQUEST);
            } else {
                (message = 'Movie created'), (statuscode = enum_.CODE_CREATED);
            }
        } else {
            (status = 'Failure'),
                (errorcode = enum_.ERROR_REQUIRED_FIELD),
                (message = 'All fields are required'),
                (statuscode = enum_.CODE_BAD_REQUEST);
        }
        response = await magic.ResponseService(status, errorcode, message, data);
        return res.status(statuscode).send(response);
    } catch (err) {
        console.log('err = ', err);
        return res
            .status(enum_.CODE_INTERNAL_SERVER_ERROR)
            .send(
                await magic.ResponseService('Failure', enum_.CRASH_LOGIC, 'err', '')
            );
    }
};