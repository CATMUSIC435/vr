import { Building2, HospitalIcon, Store, University, Utensils } from "lucide-react"

export const type = {
    restaurant: {
        idx: 1,
        icon: Utensils,
        name: 'Nhà Hàng'
    },
    market: {
        idx: 2,
        icon: Store,
        name: 'Chợ'
    },
    hospital: {
        idx: 3,
        icon: HospitalIcon,
        name: 'Bệnh viện'
    },
    suppermarket: {
        idx: 4,
        icon: Building2,
        name: 'Siêu thị'
    },
    school: {
        idx: 5,
        icon: University,
        name: 'Trường học'
    }
}

export const typeArray = Object.entries(type).map(([key, value]) => ({
    key,
    ...value
}));

export const pots = [
    {
        idx: 1,
        name: 'An Lâm Retreats Saigon River',
        img: '/maps/an-lam-retreats-saigon-river.jpg',
        hImg: 40,
        top: 400,
        position: [493.8441702975689, -110, 78.2172325],
        latlong: [106.6991131, 10.870975],
        color: '#ff8800',
        type: type.restaurant.idx,
    },
    {
        idx: 2,
        name: 'Chợ Vĩnh Phú',
        img: '/maps/vinh-phu-market.jpg',
        hImg: 50,
        top: 300,
        position: [-493.84417029756884, -100, 78.21723],
        latlong: [106.6985975, 10.8772985],
        color: '#ff8800',
        type: type.market.idx,
    },
    {
        idx: 3,
        name: 'Hanh Phuc International Hospital',
        img: '/maps/hanh-phuc-international-hospital.jpg',
        hImg: 60,
        top: 200,
        position: [-500.00, -400, 78.21723],
        latlong: [106.7143813778184, 10.868261323493433],
        color: '#ff8800',
        type: type.hospital.idx,
    },
    {
        idx: 4,
        name: 'Becamex International Hospital',
        img: '/maps/becamex-international-hospital.jpg',
        hImg: 60,
        top: 200,
        position: [-500.00, -400, 200.00],
        latlong: [106.7109569, 10.9044895],
        color: '#ff8800',
        type: type.hospital.idx,
    },
    {
        idx: 5,
        name: 'Lotte Mart',
        img: '/maps/lotte-mart.jpg',
        hImg: 60,
        top: 200,
        position: [-500, -150, -10],
        latlong: [106.7117956, 10.9056762],
        color: '#ff8800',
        type: type.suppermarket.idx,
    },    
    {
        idx: 5,
        name: 'Mầm non hoa cúc 6',
        img: '/maps/kindergarten-6.jpg',
        hImg: 70,
        top: 400,
        position: [220, -280, -360],
        latlong: [106.70309902027181, 10.869968516774309],
        color: '#ff8800',
        type: type.school.idx,
    }
]