# Tizapp Dashboard
* Se tomó de base la UI de MaterioUI
* Se creó repositorio de Github y se lo conectó a un proyecto de Vercel
* Se creó BD Postgres en Vercel y se lo conectó al proyecto con las variables de entorno (.env)
* Se instaló Prisma en el proyecto (Los archivos estan dentros de ./src/) y se creó el schema
```
npm install prisma --save-dev
npx prisma db push --schema=./src/prisma/schema.prisma (Luego de crear el schema)
npx prisma studio --schema=./src/prisma/schema.prisma (Para correr Prisma Studio y verlo localmente en el puerto 5555)



## Utils

* Create user
```
import prisma from '../lib/prisma';
const user = await prisma.user.create({
  data: {
    email: 'flavio@test.io',
    name: 'Flavio Priotti',
    role: 'Admin',
    status: "Enabled"
  },
})
```
