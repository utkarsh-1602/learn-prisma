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
        }
        ],
    })

    const findManyFields = await prisma.user.findMany({
        where: {
            name: "Utkarsh",
        },
        // distinct: ["name"],
        // here you are getting first 2 users
        take: 2,
        // if you want to skip the 1st user, and return next 2 users, use skip
        skip: 1,
        // user orderby to get users by defined fields
        orderBy: {
            age: "desc" // descending
        }

    })


    console.log(users)
    console.log(findManyFields)

}
main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })