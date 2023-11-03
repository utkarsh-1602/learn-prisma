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
            name: "naruto",
            age: 20,
            email: "iwillbehokage@gmail.com",
        }
        ],
    })

    // find the field by a unique constraint
    const findField = await prisma.user.findUnique({
        where: {
            email: "utkarshuh16@gmail.com"
        }
    })

    // Find the field by multiple unique constraints 
    // in the schema.prisma we've defined a unique constraint for multiple fields [age, name]
    const findMultipleFields = await prisma.user.findUnique({
        where: {
            age_name: {
                age: 21,
                name: "Utkarsh"
            }
        }
    })


    const findAnyField = await prisma.user.findFirst({
        where: {
            name: "Utkarsh"
        }
    })

    console.log(users)
    console.log(findField)
    console.log(findMultipleFields)
    console.log(findAnyField)
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })