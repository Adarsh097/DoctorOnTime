import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.png'
import Neurologist from './Neurologist.png'
import Gastroenterologist from './Gastroenterologist.png'
import General_physician from './General_physician.png'
import Gynecologist from './Gynecologist.png'
import Pediatricians from './Pediatricians.png'
import icon from './icon.png'
import animation from './animation.mp4'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    icon,
    animation
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Aarav Sharma',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about : 'Dr. Aarav Sharma has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '15th Avenue, Connaught Place',
            line2: 'Central Delhi, New Delhi'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Priya Singh',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Priya Singh has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '7th Lane, Karol Bagh',
            line2: 'Pusa Road, New Delhi'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Rohan Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Rohan Patel has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '10th Block, Vasant Vihar',
            line2: 'South Delhi, New Delhi'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Rajesh Choudhary',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Rajesh Choudhary has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '5th Street, Hauz Khas Village',
            line2: 'Outer Ring Road, South Delhi'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Ananya Nair',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Ananya Nair has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '2nd Avenue, Lajpat Nagar',
            line2: 'Ring Road, South Delhi'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Vijay Deshmukh',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Vijay Deshmukh has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '18th Cross, Dwarka Sector 10',
            line2: 'Dwarka, New Delhi'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Ankit Kapoor',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Ankit Kapoor has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies',
        fees: 50,
        address: {
            line1: '6th Cross, Janakpuri Block B',
            line2: 'West Delhi, New Delhi'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Aditi Gupta',
        image: doc9,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Aditi Gupta has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '23rd Cross, Greater Kailash',
            line2: 'South Extension, New Delhi'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Pooja Das',
        image: doc11,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Pooja Das has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '8th Block, Rohini Sector 9',
            line2: 'North West Delhi, New Delhi'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Pranav Mehta',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Pranav Mehta** has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '9th Street, Saket',
            line2: 'Mehrauli Road, South Delhi'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Meera Kulkarni',
        image: doc13,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Meera Kulkarni has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '11th Avenue, Chanakyapuri',
            line2: 'Diplomatic Enclave, New Delhi'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Karthik Rao',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Karthik Rao has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '14th Lane, Patel Nagar',
            line2: 'West Delhi, New Delhi'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Sneha Mukherjee',
        image: doc15,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Sneha Mukherjee has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: 'West Delhi, New Delhi',
            line2: 'Ring Road, New Delhi'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Manish Verma',
        image: doc12,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Manish Verma has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '3rd Cross, Shalimar Bagh',
            line2: 'North Delhi, New Delhi'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Sandeep Thakur',
        image: doc8,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Sandeep Thakur has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '12th Avenue, Defence Colony',
            line2: 'South Delhi, New Delhi'
        }
    },
]