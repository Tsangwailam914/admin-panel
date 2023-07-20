export const menu = [
    {
        id: 1,
        title: 'main',
        listItems: [
            {
                id: 1,
                title: 'Homepage',
                url: '/',
                icon: 'home.svg'
            },
            {
                id: 2,
                title: 'Profile',
                url: '/users/1',
                icon: 'user.svg'
            }
        ]
    },
    {
        id: 2,
        title: 'lists',
        listItems: [
            {
                id: 1,
                title: 'Users',
                url: '/users',
                icon: 'user.svg'
            },
            {
                id: 2,
                title: 'Products',
                url: '/products',
                icon: 'product.svg'
            },
            {
                id: 3,
                title: 'Orders',
                url: '/orders',
                icon: 'order.svg'
            },
            {
                id: 4,
                title: 'Posts',
                url: '/posts',
                icon: 'post2.svg'
            }
        ]
    },
    {
        id: 3,
        title: 'general',
        listItems: [
            {
                id: 1,
                title: 'Elements',
                url: '/',
                icon: 'element.svg'
            },
            {
                id: 2,
                title: 'Notes',
                url: '/',
                icon: 'note.svg'
            },
            {
                id: 3,
                title: 'Forms',
                url: '/',
                icon: 'form.svg'
            },
            {
                id: 4,
                title: 'Calendar',
                url: '/',
                icon: 'calendar.svg'
            }
        ]
    },
    {
        id: 4,
        title: 'Maintenance',
        listItems: [
            {
                id: 1,
                title: 'Settings',
                url: '/',
                icon: 'setting.svg'
            },
            {
                id: 2,
                title: 'Backups',
                url: '/',
                icon: 'backup.svg'
            }
        ]
    },
    {
        id: 5,
        title: 'Anaytics',
        listItems: [
            {
                id: 1,
                title: 'Charts',
                url: '/',
                icon: 'chart.svg'
            },
            {
                id: 2,
                title: 'Logs',
                url: '/',
                icon: 'log.svg'
            }
        ]
    }
]

export const topDealUsers = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
        username: 'Elva McDonald',
        email: 'elva@gmail.com',
        amount: '2.668',
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1606914707708-5180546f153d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
        username: 'Linnie Nelson',
        email: 'linnie@gmail.com',
        amount: '4.343',
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1630883665215-dc90914c334b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
        username: 'Brent Reeves',
        email: 'brenete@gmail.com',
        amount: '3.456',
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        username: 'Adeline Watson',
        email: 'adelinee@gmail.com',
        amount: '5.444',
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        username: 'Adeline Watson',
        email: 'adelinee@gmail.com',
        amount: '5.444',
    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
        username: 'Wilson Simith',
        email: 'wilson@gmail.com',
        amount: '5.345',
    },
    {
        id: 6,
        img: 'https://images.unsplash.com/photo-1625897428517-7e2062829a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
        username: 'Jane Simith',
        email: 'jamen@gmail.com',
        amount: '6.567',
    },
    {
        id: 7,
        img: 'https://images.unsplash.com/photo-1630945386735-372fbe731e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
        username: 'Julie Simith',
        email: 'julien@gmail.com',
        amount: '9.879',
    },
]

export const chartBoxUser = {
    color: "#8884d8",
    icon: '/userIcon.svg',
    title: 'Total Users',
    number: '11.238',
    dataKey: 'users',
    percentage: 45,
    chartData: [
        {name: 'Sun', users: 400},
        {name: 'Mon', users: 600},
        {name: 'Tue', users: 500},
        {name: 'Wed', users: 700},
        {name: 'Thur', users: 200},
        {name: 'Fri', users: 800},
        {name: 'Sat', users: 200},
    ]
}

export const chartBoxProduct = {
    color: 'skyblue',
    icon: '/productIcon.svg',
    title: 'Total Products',
    number: '238',
    dataKey: 'products',
    percentage: 21,
    chartData: [
        {name: 'Sun', products: 400},
        {name: 'Mon', products: 600},
        {name: 'Tue', products: 500},
        {name: 'Wed', products: 700},
        {name: 'Thur', products: 200},
        {name: 'Fri', products: 800},
        {name: 'Sat', products: 200},
    ]
}

export const chartBoxRevenue = {
    color: 'teal',
    icon: '/revenueIcon.svg',
    title: 'Total Revenue',
    number: '$56.987',
    dataKey: 'revenue',
    percentage: -12,
    chartData: [
        {name: 'Sun', revenue: 400},
        {name: 'Mon', revenue: 600},
        {name: 'Tue', revenue: 500},
        {name: 'Wed', revenue: 700},
        {name: 'Thur', revenue: 200},
        {name: 'Fri', revenue: 800},
        {name: 'Sat', revenue: 200},
    ]
}

export const chartBoxConversion = {
    color: 'gold',
    icon: '/conversionIcon.svg',
    title: 'Total Ratio',
    number: '2.5',
    dataKey: 'ratio',
    percentage: 12,
    chartData: [
        {name: 'Sun', ratio: 400},
        {name: 'Mon', ratio: 600},
        {name: 'Tue', ratio: 500},
        {name: 'Wed', ratio: 700},
        {name: 'Thur', ratio: 200},
        {name: 'Fri', ratio: 800},
        {name: 'Sat', ratio: 200},
    ]
}

export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: '#8884d8',
    dataKey: 'profit',
    chartData: [
        {
            name: 'Sun',
            profit: 4000
        },
        {
            name: 'Mon',
            profit: 2000
        },
        {
            name: 'Tue',
            profit: 5000
        },
        {
            name: 'Wed',
            profit: 900
        },
        {
            name: 'Thur',
            profit: 4903
        },
        {
            name: 'Fri',
            profit: 2098
        },
        {
            name: 'Sat',
            profit: 6543
        },
    ]
}

export const barChartBoxVisit = {
    title: "Total Visit",
    color: '#FF8042',
    dataKey: 'visit',
    chartData: [
        {
            name: 'Sun',
            visit: 4000
        },
        {
            name: 'Mon',
            visit: 2000
        },
        {
            name: 'Tue',
            visit: 5000
        },
        {
            name: 'Wed',
            visit: 900
        },
        {
            name: 'Thur',
            visit: 4903
        },
        {
            name: 'Fri',
            visit: 2098
        },
        {
            name: 'Sat',
            visit: 6543
        },
    ]
}

export const userRows = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
        lastName: 'Hubbard',
        firstName: 'Eula',
        email: 'eula@gmail.com',
        phone: '123 345 232',
        createAt: '01.01.2023',
        verified: true,
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1606914707708-5180546f153d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
        lastName: 'Hubbard',
        firstName: 'Eula',
        email: 'eula@gmail.com',
        phone: '123 345 232',
        createAt: '01.01.2023',
        verified: true,
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1602471615287-d733c59b79c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80',
        lastName: 'Watson',
        firstName: 'Emma',
        email: 'emma@gmail.com',
        phone: '234 432 678',
        createAt: '02.01.2023',
        verified: false,
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1581992652564-44c42f5ad3ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
        lastName: 'Smith',
        firstName: 'Elsa',
        email: 'elsa@gmail.com',
        phone: '987 234 555',
        createAt: '23.04.2023',
        verified: true,
    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1554780336-390462301acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
        lastName: 'Lancy',
        firstName: 'Lance',
        email: 'lance@gmail.com',
        phone: '223 521 784',
        createAt: '12.03.2023',
        verified: false,
    },
    {
        id: 6,
        img: 'https://images.unsplash.com/photo-1630026317249-c1c83b21ea07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=985&q=80',
        lastName: 'Manson',
        firstName: 'Geroge',
        email: 'geroge@gmail.com',
        phone: '123 566 453',
        createAt: '14.01.2023',
        verified: false,
    }
]