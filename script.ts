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


    const updateUser = await prisma.user.update({
        where: {
            email: "utkarsh@gmail.com"
        },
        data: {
            email: "utkarsh1@gmail.com"
        }
    })


    const updateUser2 = await prisma.user.update({
        where: {
            email: "iwillbehokage@gmail.com"
        },
        data: {
            age: {
                increment: 1
            }
        }
    })

    //updating user preference
    const updateUser3 = await prisma.user.update({
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


    console.log(updateUser)
    console.log(updateUser2)
    console.log(updateUser3)

}
main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })