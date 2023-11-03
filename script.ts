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


    // Advance filtering
    const findManyFields = await prisma.user.findMany({
        where: {
            // name: { equals: "Utkarsh" },
            name: { in: ["Utkarsh", "naruto"] }, // return all the users of given names            
        },

    })

    const findManyFields2 = await prisma.user.findMany({
        where: {
            // name: { equals: "Utkarsh" },
            name: { notIn: ["Utkarsh"] }, // don't return the users of given names
        },

    })


    const findManyFields3 = await prisma.user.findMany({
        where: {
            age: { lt: 30 } // age less than 20
        },

    })

    const containsTheText = await prisma.user.findMany({
        where: {
            email: { contains: "@rediffmail.com" }, //checks if it contains the desired text in the given field
            // you can also find the field values with "endsWith" or "startsWith"

        }
    })

    //combining queries with AND operator
    const combineQueries = await prisma.user.findMany({
        where: {
            AND: [
                { email: { startsWith: "u" } },
                { name: "Utkarsh" }
            ],
            OR: [
                { age: { gt: 20 } },
                { name: "naruto" }
            ]
        }
    })

    const combineQueries2 = await prisma.user.findMany({
        where: {
            OR: [
                { age: { gt: 20 } },
                { name: "naruto" }
            ]
        }
    })


    console.log(users)
    console.log(findManyFields.length)
    console.log("findManyFields ===> ", findManyFields)
    console.log("findManyFields2 ===> ", findManyFields2)
    console.log("findManyFields3 ===> ", findManyFields3)
    console.log("Contains text ===> ", containsTheText)
    console.log("Combined Queries ====> ", combineQueries)
    console.log("Combined Queries2 ====> ", combineQueries2)


}
main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })