import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ["query"] })

async function main() {
    await prisma.user.deleteMany()
    const user = await prisma.user.create({
        data: {
            name: "Utkarsh",
            age: 21,
            email: "utkarshuh16@gmail.com",
            userPreference: {
                create: {
                    emailUpdates: true,
                }
            }
        },
        include: {
            userPreference: true
        }
        // select: {
        //     name: true,
        // }
        // we cannot do select and include, both at the same time
    })

    console.log(user)
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })