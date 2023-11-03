import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.user.deleteMany()
    const users = await prisma.user.createMany({
        data: [{
            name: "Utkarsh",
            age: 21,
            email: "utkarshuh16@gmail.com",
        },
        {
            name: "Utkarsh",
            age: 29,
            email: "utkarsh@gmail.com",
        },
        {
            name: "Utkarsh",
            age: 44,
            email: "version2@gmail.com",
        },
        {
            name: "naruto",
            age: 20,
            email: "iwillbehokage@gmail.com",
        },
        {
            name: "sasuke",
            age: 20,
            email: "uchiha@rediffmail.com",
        },
        {
            name: "goku",
            age: 50,
            email: "ultrainstinct@saiyan.com",
        },
        ],
    })

    // updating user preference
    const updateUser = await prisma.user.update({
        where: {
            email: "iwillbehokage@gmail.com"
        },
        data: {
            userPreference: {
                create: {
                    emailUpdates: true
                }
            }
        }
    })

    // connect user with specific preferenceId
    const connectUser = await prisma.user.update({
        where: {
            email: "utkarsh@gmail.com"
        },
        data: {
            userPreference: {
                connect: {
                    id: "de3d92b1-ce4a-4f4b-9969-68268f1ebe48"
                }
            }
        }
    })

    // disconnect user with specific preferenceId

    const disconnectUser = await prisma.user.update({
        where: {
            email: "utkarsh@gmail.com"
        },
        data: {
            userPreference: {
                disconnect: {
                    id: "de3d92b1-ce4a-4f4b-9969-68268f1ebe48"
                }
            }
        }
    })

    console.log("Update User ===> ", updateUser)
    console.log("Connect User ===> ", connectUser)
    console.log("Disconnect User ===> ", disconnectUser)



    // Delete Operations  
    // const user = await prisma.user.delete
    // const user = await prisma.user.deleteMany


}
main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })