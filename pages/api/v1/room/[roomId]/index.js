import prisma, { handlePrismaError } from "@utils/server/prisma";


export default async function handler(req, res) {
    const roomId = parseInt(req.query.roomId);

    if (!roomId) {
        res.status(400).json({error: "Missing or wrong type for required param: roomId"});
        return;
    }
    
    switch (req.method) {
        case "GET": {
            // send sdp to client here
            const operation = await prisma.room.findUnique({where: {
                id: roomId
            }});
            
            if (!operation) {
                res.status(404).json({message: "Room not found. Most likely not created"});
            }

            res.status(200).json(operation);
            break;
        }

        case "POST": {
            // room doesnt exist, expects sdpOffer
            const { sdpOffer } = req.body;

            try {
                const operation = await prisma.room.create({data: {
                    id: roomId,
                    sdpOffer: sdpOffer
                }});
                res.status(201).json(operation);            
            } catch (error) {
                const errorRes = handlePrismaError(error);
                res.status(400).json(errorRes);
            }
            break;
        }

        case "PUT": {
            // room exists, expects sdpAnswer
            const { sdpAnswer } = req.body;

            try {
                const operation = await prisma.room.update({
                    data: {
                        sdpAnswer: sdpAnswer
                    },
                    where: {
                        id: roomId
                    }
                });
                res.status(201).json(operation);
            } catch (error) {
                const errorRes = handlePrismaError(error);
                res.status(400).json(errorRes);
            }
            break;
        }
        default:
            res.status(405).json({error: "Method not allowed. Only GET, POST and PUT"});
            break;
    }
}