import prisma, { handlePrismaError } from "@utils/server/prisma";


export default async function handler(req, res) {
    const roomId = parseInt(req.query.roomId);
    
    switch (req.method) {
        case "GET": {
            try {
                const response = await prisma.iceCandidate.findMany({where: {
                    roomId: roomId,
                    type: "OFFER"
                }})

                res.status(200).json({offerCandidates: response});
            } catch (error) {
                const errorRes = handlePrismaError(error);
                res.status(400).json(errorRes);
            }
            break;
        }   
        case "POST": {
            const { offerCandidate } = req.body;
            if (!offerCandidate) {
                res.status(400).json({message: "Error. Missing required field. offerCandidiate in payload"});
            }

            try {
                const response = await prisma.iceCandidate.create({data: {
                    roomId: roomId,
                    type: "OFFER",
                    candidate: offerCandidate
                }});

                res.status(201).json({offerCandidate: response});
            } catch (error) {
                const errorRes = handlePrismaError(error);
                res.status(400).json(errorRes);
            }
            break;
        } 
        default:
            res.status(400).json({message: "Error. Wrong request method. Only GET and POST are accepted"});
            break;
    }
}