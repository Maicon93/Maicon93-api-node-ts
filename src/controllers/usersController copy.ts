import { Router, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';


const UserController = Router();

UserController.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ username: 'Maicon'}];
    res.status(StatusCodes.OK).send({users});
})

UserController.get('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
})

UserController.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body
    res.status(StatusCodes.CREATED).send(newUser)
})

UserController.put('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;
    res.status(StatusCodes.OK).send({ modifiedUser });
})

UserController.delete('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
})


export default UserController;

//get /users
//get /users/:uuid
//post /users
//put /users/:uuid
//delete /users/:uuid
