import React, { useMemo, useState, useEffect } from 'react';
import { Droplet, ShieldCheck, Sparkles, Star, Disc3 } from 'lucide-react';
import geminiImage1 from './assets/Gemini_Generated_Image_zip9qzip9qzip9qz.png';
import geminiImage2 from './assets/Gemini_Generated_Image_yvbadlyvbadlyvba.png';
import sampleAudioLocal from './assets/cascade-breathe-future-garage-412839.mp3';
import audioAmazing from './assets/i-think-you-are-absolutely-amazing-female-spoken-213173.mp3';
import audioImpressive from './assets/all-right-well-that-was-impressive-96232.mp3';
import productVideo1 from './assets/3402764-uhd_2160_4096_25fps.mp4';
import productVideo2 from './assets/3403280-hd_1080_1920_25fps.mp4';
import productVideo3 from './assets/3403283-uhd_2160_4096_25fps.mp4';
import productVideo4 from './assets/4008365-uhd_2160_4096_25fps.mp4';
import productVideo5 from './assets/8141585-uhd_2160_4096_25fps.mp4';
import productVideo6 from './assets/854082-hd_1920_1080_25fps.mp4';
import storeImage1 from './assets/store.png';
import storeImage2 from './assets/store2.png';
import storeImage3 from './assets/store3.png';
import storeImage4 from './assets/store5.png';
import storeVisit1 from './assets/Screenshot 2025-11-10 at 3.18.39 PM.png';
import storeVisit2 from './assets/Screenshot 2025-11-10 at 3.18.46 PM.png';
import storeVisit3 from './assets/Screenshot 2025-11-10 at 3.18.56 PM.png';
import storeVisit4 from './assets/Screenshot 2025-11-10 at 3.19.03 PM.png';
import storeVisit5 from './assets/Screenshot 2025-11-10 at 3.19.24 PM.png';
import storeVisit6 from './assets/Screenshot 2025-11-10 at 3.19.29 PM.png';
import storeVisit7 from './assets/Screenshot 2025-11-10 at 3.19.38 PM.png';
import storeVisit8 from './assets/Screenshot 2025-11-10 at 3.19.44 PM.png';
import storeVisit9 from './assets/Screenshot 2025-11-10 at 3.19.51 PM.png';
import storeVisit10 from './assets/Screenshot 2025-11-10 at 3.19.57 PM.png';
import waImage1155000 from './assets/WhatsApp Image 2025-11-10 at 11.50.00 AM.jpeg';
import waImage1155000Alt from './assets/WhatsApp Image 2025-11-10 at 11.50.00 AM (1).jpeg';
import waImage1155001 from './assets/WhatsApp Image 2025-11-10 at 11.50.01 AM.jpeg';
import waImage1155053 from './assets/WhatsApp Image 2025-11-10 at 11.50.53 AM.jpeg';
import waImage1155053Alt from './assets/WhatsApp Image 2025-11-10 at 11.50.53 AM (1).jpeg';
import waImage1155054 from './assets/WhatsApp Image 2025-11-10 at 11.50.54 AM.jpeg';
import waImage1155054Alt from './assets/WhatsApp Image 2025-11-10 at 11.50.54 AM (1).jpeg';
import waImage1155054Alt2 from './assets/WhatsApp Image 2025-11-10 at 11.50.54 AM (2).jpeg';
import waImage1155055 from './assets/WhatsApp Image 2025-11-10 at 11.50.55 AM.jpeg';
import waImage1155055Alt from './assets/WhatsApp Image 2025-11-10 at 11.50.55 AM (1).jpeg';
import dress1 from './assets/dress.png';
import dress2 from './assets/dress_2.png';
import dress3 from './assets/dress_3.png';
import dress4 from './assets/dress_4.png';
import dress5 from './assets/dress_5.png';

// Login Modal Component (non-functional, just for display)
function LoginModal({ onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Intentionally not allowing login - just show error
        setError('Login is currently unavailable. Please close this window to continue.');
    };

    return (
        <div
            className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50 p-4 md:p-6"
            style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(165, 130, 150, 0.1) 100%)'
            }}
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl max-w-md w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
                    <h2 className="text-2xl font-bold text-gray-900 font-['Space_Grotesk']">Login to Reply</h2>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors"
                    >
                        ×
                    </button>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}
                    
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a58296] focus:border-transparent"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a58296] focus:border-transparent"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex gap-3 pt-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-4 py-2 bg-[#a58296] text-white rounded-lg text-sm font-medium hover:bg-[#8e6d82] transition-colors"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const ReviewCards = ({
    rating = 4.8,
    totalReviews = 147,
    breakdown = { 5: 110, 4: 25, 3: 8, 2: 3, 1: 1 },
    starColor = '#A58296',
    accentColor = '#957C70',
    contentAfterTabs = null,
    onLoadMoreRef = null,
    showExtras = false
}) => {
    const [activeTab, setActiveTab] = useState('product');
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [selectedAudio, setSelectedAudio] = useState(null);
    const [selectedStore, setSelectedStore] = useState(null);
    const [storeView, setStoreView] = useState('store-visit');
    const [filterBy, setFilterBy] = useState('recent');
    const [mediaSourceFilter, setMediaSourceFilter] = useState('all');
    const [isBrandAISummaryExpanded, setIsBrandAISummaryExpanded] = useState(false);
    const [reviewsToShow, setReviewsToShow] = useState(5); // Initially show 5 reviews
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [sessionReviews, setSessionReviews] = useState([]);
    const [showLoginModal, setShowLoginModal] = useState(false);
    // State for thumbs up/down counts for each review - will be initialized after reviews are defined
    const [reviewReactions, setReviewReactions] = useState({});
    
    const percent = (count) => Math.round((count / totalReviews) * 100);
    const placeholderImages = [
        dress1,
        dress2,
        dress3,
        dress4,
        dress5,
        dress1,
        dress2,
        dress3,
        dress4,
        dress5
    ];

    // Instagram reels URLs
    const instagramReels = [
        'https://www.instagram.com/p/DQeXn-nDyYk/',
        'https://www.instagram.com/reel/DQiqQifD5wH/',
        'https://www.instagram.com/reel/DQOv1hKD8e8/',
        'https://www.instagram.com/reel/DPtcILFj_tc/?igsh=MWs2eXBqYTNiamlvOQ%3D%3D'
    ];

    // Create Instagram embed HTML using blockquote format (standard Instagram embed)
    const createInstagramEmbed = (url) => {
        // Clean URL to remove query parameters for embed
        const cleanUrl = url.split('?')[0];
        return `<blockquote class="instagram-media" data-instgrm-permalink="${cleanUrl}" data-instgrm-version="14" style="max-width: 100%; width: 100%;"></blockquote>`;
    };
    
    // Reinitialize Instagram embeds when component mounts and when embeds are rendered
    useEffect(() => {
        const processEmbeds = () => {
            if (window.instgrm && window.instgrm.Embeds) {
                window.instgrm.Embeds.process();
            } else {
                // Retry if script hasn't loaded yet (max 10 retries)
                let retries = 0;
                const retryInterval = setInterval(() => {
                    retries++;
                    if (window.instgrm && window.instgrm.Embeds) {
                        window.instgrm.Embeds.process();
                        clearInterval(retryInterval);
                    } else if (retries >= 10) {
                        clearInterval(retryInterval);
                    }
                }, 200);
            }
        };
        
        // Process embeds after a short delay to ensure DOM is ready
        const timer = setTimeout(processEmbeds, 500);
        
        // Also process when activeTab changes to 'media'
        if (activeTab === 'media') {
            const mediaTimer = setTimeout(processEmbeds, 1000);
            return () => {
                clearTimeout(timer);
                clearTimeout(mediaTimer);
            };
        }
        
        return () => clearTimeout(timer);
    }, [instagramReels, activeTab]);

    const mediaItems = useMemo(() => {
        // Return Instagram reels as media items
        return instagramReels.map((url, index) => ({
            id: `insta-reel-${index}`,
            url: url,
            source: 'instagram',
            sourceLabel: 'Instagram',
            handle: '@instagram',
            uploadedAt: new Date().toLocaleDateString(),
            description: 'Instagram Reel',
            tags: ['#Instagram', '#Reel']
        }));
    }, []);

    const shuffledMediaItems = useMemo(
        () => [...mediaItems].sort(() => Math.random() - 0.5),
        [mediaItems]
    );

    const audioItems = useMemo(() => ([
        {
            id: 'audio-1',
            title: 'All Right, Well That Was Impressive',
            platform: 'Customer Review',
            mood: 'Positive feedback',
            uploadedAt: 'Nov 10, 2025',
            duration: '0:15',
            src: audioImpressive,
            link: '#'
        },
        {
            id: 'audio-2',
            title: 'I Think You Are Absolutely Amazing',
            platform: 'Customer Review',
            mood: 'Happy customer',
            uploadedAt: 'Nov 8, 2025',
            duration: '0:12',
            src: audioAmazing,
            link: '#'
        }
    ]), []);

    const videoItems = useMemo(() => ([
        {
            id: 'video-1',
            title: 'Shelf Styling Walkthrough',
            platform: 'Instagram Reels',
            uploadedAt: 'Nov 9, 2025',
            src: productVideo2,
            link: 'https://instagram.com/reel/shelf-styling'
        },
        {
            id: 'video-2',
            title: 'Hand Cream Texture Closeup',
            platform: 'WhatsApp Broadcast',
            uploadedAt: 'Nov 8, 2025',
            src: productVideo4,
            link: 'https://baboski.com/texture'
        },
        {
            id: 'video-3',
            title: 'Skincare Routine Clip',
            platform: 'Instagram Stories',
            uploadedAt: 'Nov 6, 2025',
            src: productVideo3,
            link: 'https://instagram.com/stories/baboski'
        },
        {
            id: 'video-4',
            title: 'Shelf Reset Timelapse',
            platform: 'Retail Partner Drop',
            uploadedAt: 'Nov 4, 2025',
            src: productVideo5,
            link: 'https://baboski.com/retail'
        },
        {
            id: 'video-5',
            title: 'Glow Bar BTS',
            platform: 'Community WhatsApp',
            uploadedAt: 'Nov 2, 2025',
            src: productVideo1,
            link: 'https://baboski.com/community'
        },
        {
            id: 'video-6',
            title: 'Product Flatlay Reel',
            platform: 'Instagram Reels',
            uploadedAt: 'Oct 31, 2025',
            src: productVideo6,
            link: 'https://instagram.com/reel/flatlay'
        }
    ]), []);

    const storeLocations = useMemo(() => ([
        {
            id: 'store-1',
            name: 'Fashion Boutique – Downtown',
            address: '123 Fashion Street, Downtown District',
            hours: '10:00 AM – 9:00 PM',
            image: storeImage1,
            phone: '+1 (555) 123-4567'
        },
        {
            id: 'store-2',
            name: 'Style Hub – Shopping Plaza',
            address: '456 Style Avenue, Shopping Plaza',
            hours: '11:00 AM – 8:30 PM',
            image: storeImage2,
            phone: '+1 (555) 234-5678'
        },
        {
            id: 'store-3',
            name: 'Design Studio – Retail Center',
            address: '789 Design Boulevard, Retail Center',
            hours: '10:30 AM – 9:30 PM',
            image: storeImage3,
            phone: '+1 (555) 345-6789'
        },
        {
            id: 'store-4',
            name: 'Collection Store – Market Square',
            address: '321 Collection Way, Market Square',
            hours: '11:00 AM – 9:00 PM',
            image: storeImage4,
            phone: '+1 (555) 456-7890'
        }
    ]), []);

    const mediaFilters = [
        { value: 'all', label: 'All Media' },
        { value: 'instagram', label: 'Instagram' }
    ];
    const palette = {
        star: starColor,
        barDark: accentColor,
        border: '#E5E7EB'
    };

    const isMediaTab = activeTab === 'media';
    const isAudioTab = activeTab === 'audio';
    const isVideoTab = activeTab === 'video';
    const isStoreTab = activeTab === 'store';
    const isReviewTab = activeTab === 'product' || activeTab === 'brand';
    // Filter media - now only Instagram reels (all are Instagram, so filter always returns all)
    const filteredMedia = instagramReels.map((url, index) => ({
        id: `insta-reel-${index}`,
        url: url,
        source: 'instagram',
        sourceLabel: 'Instagram'
    }));
    const filteredAudio = audioItems;
    const storeVisits = useMemo(() => ([
        {
            id: 'visit-1',
            image: storeVisit1,
            caption: 'Customer feedback at Address One Dehradun',
            badge: '@unhuofficial'
        },
        {
            id: 'visit-2',
            image: storeVisit2,
            caption: 'Festive look haul from our jewellery bar',
            badge: '@amitaroy_official'
        },
        {
            id: 'visit-3',
            image: storeVisit3,
            caption: 'Client reviews live from the studio',
            badge: '@amitaroy_official'
        },
        {
            id: 'visit-4',
            image: storeVisit4,
            caption: 'Gen Z squad at Inhanss pop-up',
            badge: '@thelostsoul_211'
        },
        {
            id: 'visit-5',
            image: storeVisit5,
            caption: 'Local entrepreneurs spotlighted by Unhu',
            badge: '#UnhuStartupEmporium'
        },
        {
            id: 'visit-6',
            image: storeVisit6,
            caption: 'Matching jewellery styling session',
            badge: '@inhanss'
        },
        {
            id: 'visit-7',
            image: storeVisit7,
            caption: 'Happy customer at the crystal jewels wall',
            badge: 'Inhanss Studio'
        },
        {
            id: 'visit-8',
            image: storeVisit8,
            caption: 'Handmade crystal haul from Address One',
            badge: '@unhuofficial'
        },
        {
            id: 'visit-9',
            image: storeVisit9,
            caption: 'Weekend shoppers discovering new brands',
            badge: '#ClientReviews'
        },
        {
            id: 'visit-10',
            image: storeVisit10,
            caption: 'Why women keep coming back to Inhanss',
            badge: '@ashmitakohli'
        }
    ]), []);

    const filteredVideo = videoItems;
    const filteredStores = storeLocations;
    const filteredStoreVisits = storeVisits;
    const storeTabOptions = [
        { value: 'in-store', label: 'In Store' },
        { value: 'store-visit', label: 'Store Visit' }
    ];

    const productReviews = [
        {
            name: 'Priya S.',
            date: '2 weeks ago',
            dateValue: new Date('2024-10-27'),
            location: 'Mumbai',
            title: 'Beautiful dress!',
            item: 'Elegant Maxi Dress',
            text: 'The dress fits perfectly and looks stunning. The fabric quality is excellent and very comfortable to wear.',
            images: [placeholderImages[0], placeholderImages[1]],
            rating: 4,
            verified: true
        },
        {
            name: 'Ananya G.',
            date: '1 month ago',
            dateValue: new Date('2024-10-10'),
            location: 'Bangalore',
            title: '',
            item: 'Floral Summer Dress',
            text: 'Fast delivery. The dress is nice but runs a bit small. Consider ordering one size up.',
            images: [],
            rating: 3,
            verified: false
        },
        {
            name: 'Meera P.',
            date: '3 weeks ago',
            dateValue: new Date('2024-10-20'),
            location: 'Ahmedabad',
            title: 'Love it!',
            item: 'Chic Wrap Dress',
            text: 'Absolutely love this dress!! The design is elegant and it flatters my figure perfectly. Will definitely buy more colors.',
            images: [placeholderImages[3]],
            rating: 5,
            verified: true
        },
        {
            name: 'Kavya R.',
            date: '5 days ago',
            dateValue: new Date('2024-11-05'),
            location: 'Hyderabad',
            title: '',
            item: 'Casual Midi Dress',
            text: 'The dress is okay but the fabric feels a bit thin. Not worth the price in my opinion.',
            rating: 2,
            verified: true
        },
        {
            name: 'Riya S.',
            date: '2 days ago',
            dateValue: new Date('2024-11-08'),
            location: 'Delhi',
            title: 'Excellent quality',
            item: 'Formal Evening Dress',
            text: 'Perfect for special occasions! The dress drapes beautifully and the quality is outstanding. Highly recommend!',
            images: [placeholderImages[5]],
            rating: 5,
            verified: true
        },
        {
            name: 'Aarti J.',
            date: '1 week ago',
            dateValue: new Date('2024-11-03'),
            location: 'Pune',
            title: '',
            item: 'Cotton A-Line Dress',
            text: 'Average quality. The dress is comfortable but nothing special about the design.',
            images: [],
            rating: 3,
            verified: false
        },
        {
            name: 'Shreya M.',
            date: '3 days ago',
            dateValue: new Date('2024-11-07'),
            location: 'Chennai',
            title: 'Must buy!',
            item: 'Bohemian Style Dress',
            text: 'OMG this dress is so beautiful! My friends keep asking where I got it from. Ordering another one in different color.',
            images: [placeholderImages[8], placeholderImages[9]],
            rating: 5,
            verified: true
        },
        {
            name: 'Deepa K.',
            date: '6 days ago',
            dateValue: new Date('2024-11-04'),
            location: 'Kolkata',
            title: '',
            item: 'Classic Black Dress',
            text: 'Good dress, fits well. The fabric is nice quality.',
            images: [],
            rating: 3,
            verified: true
        },
        {
            name: 'Sneha V.',
            date: '4 days ago',
            dateValue: new Date('2024-11-06'),
            location: 'Mumbai',
            title: 'Perfect fit!',
            item: 'Elegant Maxi Dress',
            text: 'Absolutely love this dress! The fit is perfect and the quality is amazing. Highly recommend!',
            images: [placeholderImages[0]],
            rating: 5,
            verified: true
        },
        {
            name: 'Aditi N.',
            date: '1 week ago',
            dateValue: new Date('2024-11-03'),
            location: 'Pune',
            title: '',
            item: 'Floral Summer Dress',
            text: 'Beautiful dress but the sizing is a bit off. Had to exchange for a larger size.',
            images: [],
            rating: 4,
            verified: true
        },
        {
            name: 'Nisha T.',
            date: '5 days ago',
            dateValue: new Date('2024-11-05'),
            location: 'Bangalore',
            title: 'Great value',
            item: 'Chic Wrap Dress',
            text: 'Excellent quality for the price. The dress is comfortable and looks elegant.',
            images: [placeholderImages[2]],
            rating: 4,
            verified: true
        },
        {
            name: 'Pooja M.',
            date: '3 days ago',
            dateValue: new Date('2024-11-07'),
            location: 'Delhi',
            title: 'Not satisfied',
            item: 'Casual Midi Dress',
            text: 'The dress arrived with a small defect. Customer service was helpful though.',
            images: [],
            rating: 2,
            verified: true
        },
        {
            name: 'Radha K.',
            date: '2 weeks ago',
            dateValue: new Date('2024-10-28'),
            location: 'Chennai',
            title: 'Amazing quality!',
            item: 'Formal Evening Dress',
            text: 'This dress exceeded my expectations! The fabric is premium and it looks stunning.',
            images: [placeholderImages[4], placeholderImages[5]],
            rating: 5,
            verified: true
        },
        {
            name: 'Kavita S.',
            date: '1 week ago',
            dateValue: new Date('2024-11-03'),
            location: 'Hyderabad',
            title: '',
            item: 'Cotton A-Line Dress',
            text: 'Good dress for daily wear. Comfortable and easy to maintain.',
            images: [],
            rating: 4,
            verified: false
        },
        {
            name: 'Sunita R.',
            date: '4 days ago',
            dateValue: new Date('2024-11-06'),
            location: 'Ahmedabad',
            title: 'Love it!',
            item: 'Bohemian Style Dress',
            text: 'Perfect for summer! Lightweight and breathable fabric. Very happy with my purchase.',
            images: [placeholderImages[6]],
            rating: 5,
            verified: true
        },
        {
            name: 'Manisha P.',
            date: '6 days ago',
            dateValue: new Date('2024-11-04'),
            location: 'Jaipur',
            title: '',
            item: 'Classic Black Dress',
            text: 'Decent quality but could be better. The stitching could be improved.',
            images: [],
            rating: 3,
            verified: true
        },
        {
            name: 'Anjali D.',
            date: '1 day ago',
            dateValue: new Date('2024-11-09'),
            location: 'Gurgaon',
            title: 'Excellent!',
            item: 'Elegant Maxi Dress',
            text: 'Beautiful dress! The design is elegant and the fit is perfect. Will definitely order again.',
            images: [placeholderImages[7]],
            rating: 5,
            verified: true
        },
        {
            name: 'Swati G.',
            date: '3 days ago',
            dateValue: new Date('2024-11-07'),
            location: 'Kolkata',
            title: '',
            item: 'Floral Summer Dress',
            text: 'Nice dress but the color is slightly different from the picture. Still looks good though.',
            images: [],
            rating: 4,
            verified: true
        },
        {
            name: 'Rashmi L.',
            date: '5 days ago',
            dateValue: new Date('2024-11-05'),
            location: 'Mumbai',
            title: 'Great purchase',
            item: 'Chic Wrap Dress',
            text: 'Very satisfied with this purchase. The dress is well-made and looks great on.',
            images: [placeholderImages[8]],
            rating: 5,
            verified: true
        },
        {
            name: 'Vidya B.',
            date: '2 weeks ago',
            dateValue: new Date('2024-10-28'),
            location: 'Pune',
            title: '',
            item: 'Casual Midi Dress',
            text: 'Average quality. The dress is okay but nothing special.',
            images: [],
            rating: 3,
            verified: false
        },
        {
            name: 'Lakshmi H.',
            date: '1 week ago',
            dateValue: new Date('2024-11-03'),
            location: 'Bangalore',
            title: 'Perfect!',
            item: 'Formal Evening Dress',
            text: 'This dress is perfect for formal occasions! The quality is excellent and it fits beautifully.',
            images: [placeholderImages[9], placeholderImages[0]],
            rating: 5,
            verified: true
        },
        {
            name: 'Sarika M.',
            date: '4 days ago',
            dateValue: new Date('2024-11-06'),
            location: 'Delhi',
            title: '',
            item: 'Cotton A-Line Dress',
            text: 'Good dress for the price. Comfortable and stylish.',
            images: [],
            rating: 4,
            verified: true
        }
    ];

    const brandReviews = [
        {
            name: 'Ishita S.',
            date: '1 week ago',
            dateValue: new Date('2024-11-03'),
            location: 'Chennai',
            title: 'Good brand',
            item: 'Baboski Brand Experience',
            text: 'Reliable products. Fast shipping.',
            images: [placeholderImages[1]],
            rating: 4,
            verified: true
        },
        {
            name: 'Neha A.',
            date: '3 days ago',
            dateValue: new Date('2024-11-07'),
            location: 'Kolkata',
            title: '',
            item: 'Baboski Brand Experience',
            text: 'Overpriced. Better options available.',
            images: [],
            rating: 2,
            verified: false
        },
        {
            name: 'Sakshi G.',
            date: '2 weeks ago',
            dateValue: new Date('2024-10-27'),
            location: 'Jaipur',
            title: 'Love their products!',
            item: 'Baboski Brand Experience',
            text: 'Amazing quality. Worth every penny. Their customer care is also very helpful.',
            images: [placeholderImages[6]],
            rating: 5,
            verified: true
        },
        {
            name: 'Divya R.',
            date: '4 days ago',
            dateValue: new Date('2024-11-06'),
            location: 'Coimbatore',
            title: '',
            item: 'Baboski Brand Experience',
            text: 'Okay brand. Nothing extraordinary.',
            rating: 3,
            verified: true
        },
        {
            name: 'Pooja T.',
            date: '1 day ago',
            dateValue: new Date('2024-11-09'),
            location: 'Gurgaon',
            title: 'Excellent!',
            item: 'Baboski Brand Experience',
            text: 'Best skincare brand in India! All my friends are now using it.',
            images: [placeholderImages[2], placeholderImages[7]],
            rating: 5,
            verified: true
        },
        {
            name: 'Sonal P.',
            date: '5 days ago',
            dateValue: new Date('2024-11-05'),
            location: 'Indore',
            title: '',
            item: 'Baboski Brand Experience',
            text: 'Good.',
            rating: 4,
            verified: false
        }
    ];

    const filterReviews = (reviews) => {
        let filtered = [...reviews];
        
        switch (filterBy) {
            case 'recent':
                filtered.sort((a, b) => b.dateValue - a.dateValue);
                break;
            case 'highest':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'lowest':
                filtered.sort((a, b) => a.rating - b.rating);
                break;
            case 'verified':
                filtered = filtered.filter(review => review.verified);
                break;
            case 'with-media':
                filtered = filtered.filter(review => review.images && review.images.length > 0);
                break;
            default:
                break;
        }
        
        return filtered;
    };
    
    // Reset reviews to show when filter or tab changes
    useEffect(() => {
        setReviewsToShow(5);
    }, [filterBy, activeTab]);

    const ratingDistribution = [
        { stars: 5, percent: 75 },
        { stars: 4, percent: 17 },
        { stars: 3, percent: 5 },
        { stars: 2, percent: 2 },
        { stars: 1, percent: 1 },
    ];

    const ratingHighlights = [
        {
            icon: ShieldCheck,
            label: 'Would recommend',
            value: '93%',
        },
        {
            icon: Sparkles,
            label: 'Love the perfect fit',
            value: '9/10',
        },
        {
            icon: Droplet,
            label: 'Say fabric quality is excellent',
            value: '92%',
        },
    ];

    // Load session reviews on mount
    useEffect(() => {
        const stored = sessionStorage.getItem('userReviews');
        if (stored) {
            try {
                setSessionReviews(JSON.parse(stored));
            } catch (e) {
                console.error('Error loading session reviews:', e);
            }
        }
    }, []);
    
    // Merge session reviews with product reviews
    const allProductReviews = useMemo(() => {
        const sessionProductReviews = sessionReviews
            .filter(r => r.type === 'product')
            .map(r => ({
                ...r,
                dateValue: new Date(r.dateValue),
                verified: true
            }));
        return [...sessionProductReviews, ...productReviews];
    }, [sessionReviews, productReviews]);
    
    const allBrandReviews = useMemo(() => {
        const sessionBrandReviews = sessionReviews
            .filter(r => r.type === 'brand')
            .map(r => ({
                ...r,
                dateValue: new Date(r.dateValue),
                verified: true
            }));
        return [...sessionBrandReviews, ...brandReviews];
    }, [sessionReviews, brandReviews]);
    
    const allFilteredReviews = isReviewTab
        ? filterReviews(activeTab === 'product' ? allProductReviews : allBrandReviews)
        : [];
    
    const currentReviews = allFilteredReviews.slice(0, reviewsToShow);
    const hasMoreReviews = allFilteredReviews.length > reviewsToShow;
    
    // Initialize review reactions for all current reviews if not already set
    useEffect(() => {
        setReviewReactions(prev => {
            const newReactions = { ...prev };
            currentReviews.forEach((_, idx) => {
                if (!newReactions[idx]) {
                    newReactions[idx] = { helpful: 0, notHelpful: 0, userReacted: null };
                }
            });
            return newReactions;
        });
    }, [currentReviews.length]);
    
    const handleLoadMore = () => {
        setReviewsToShow(prev => prev + 8); // Load 8 more reviews at a time
    };
    
    const handleSubmitReview = (reviewData) => {
        const newReview = {
            ...reviewData,
            id: `session-${Date.now()}`,
            dateValue: new Date(),
            date: 'Just now',
            verified: true,
            type: activeTab === 'product' ? 'product' : 'brand'
        };
        
        const updatedReviews = [...sessionReviews, newReview];
        setSessionReviews(updatedReviews);
        sessionStorage.setItem('userReviews', JSON.stringify(updatedReviews));
        setShowReviewForm(false);
        setReviewsToShow(5); // Reset to show new review
    };
    
    // Expose handleLoadMore, hasMoreReviews, and showReviewForm to parent component
    useEffect(() => {
        if (onLoadMoreRef) {
            onLoadMoreRef.current = {
                handleLoadMore,
                hasMoreReviews,
                openReviewForm: () => setShowReviewForm(true)
            };
        }
    }, [onLoadMoreRef, hasMoreReviews, handleLoadMore]);

    return (
        <section className="mt-8 sm:mt-10 md:mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                {/* Left Side - Rating Breakdown */}
                <div className="lg:col-span-1">
                    <div className="relative lg:sticky lg:top-[100px]">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            {/* Rating Score Card */}
                            <div className="text-center mb-6">
                                <div 
                                    className="w-32 h-32 rounded-full flex items-center justify-center mb-4 relative mx-auto"
                                    style={{
                                        background: `conic-gradient(from 225deg, ${starColor} 0%, #c69ab0 65%, rgba(165, 130, 150, 0.18) 65%)`,
                                        boxShadow: `0 18px 35px rgba(165, 130, 150, 0.18)`
                                    }}
                                >
                                    <div 
                                        className="absolute inset-2 rounded-full flex items-center justify-center"
                                        style={{
                                            background: 'linear-gradient(145deg, #ffffff 0%, #f8f4f7 100%)',
                                            boxShadow: 'inset 0 1px 4px rgba(255, 255, 255, 0.6)'
                                        }}
                                    >
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-semibold" style={{ color: '#7a5e6c' }}>{rating}</span>
                                            <span className="text-lg font-medium" style={{ color: '#b393a3' }}>/5</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center mb-2">
                                    {[...Array(5)].map((_, index) => (
                                        <Star key={index} size={18} className="fill-current" style={{ color: starColor, fill: starColor }} />
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600 mb-3">
                                    Based on <strong>{totalReviews}</strong> verified reviews
                                </p>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border" style={{ backgroundColor: `${starColor}15`, color: starColor, borderColor: `${starColor}40` }}>
                                    <ShieldCheck size={14} />
                                    <span>93% would buy again</span>
                                </div>
                            </div>

                            {/* Rating Distribution */}
                            <div className="space-y-3 mb-6">
                                {ratingDistribution.map((item) => (
                                    <div key={item.stars} className="flex items-center gap-2 sm:gap-3">
                                        <div className="flex items-center gap-1 text-xs text-gray-600 w-8 flex-shrink-0">
                                            <Star size={12} className="fill-current" style={{ color: starColor, fill: starColor }} />
                                            <span>{item.stars}</span>
                                        </div>
                                        <div className="flex-1 min-w-0 h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full rounded-full transition-all duration-300"
                                                style={{ 
                                                    width: `${item.percent}%`,
                                                    backgroundColor: starColor,
                                                    minWidth: '2px'
                                                }}
                                            />
                                        </div>
                                        <span className="text-xs text-gray-600 w-8 flex-shrink-0 text-right">{item.percent}%</span>
                                    </div>
                                ))}
                            </div>

                            {/* Rating Highlights */}
                            <div className="space-y-3">
                                {ratingHighlights.map((stat) => {
                                    const Icon = stat.icon;
                                    return (
                                        <div key={stat.label} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                                                <Icon size={16} style={{ color: starColor }} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm text-gray-900">{stat.value}</div>
                                                <div className="text-xs text-gray-600">{stat.label}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Reviews */}
                <div className="lg:col-span-2">
                    {/* Tab Headers - Outside the container */}
                    <div className="flex flex-wrap mb-6 bg-gray-100 rounded-lg p-1 gap-1">
                        <button 
                            className={`flex-1 py-3 px-6 rounded-md text-sm font-medium transition-all ${
                                activeTab === 'product' 
                                ? 'bg-white shadow-sm text-gray-900' 
                                : 'hover:text-gray-900'
                            }`}
                            style={{
                                color: activeTab === 'product' ? undefined : starColor
                            }}
                            onClick={() => setActiveTab('product')}
                        >
                            Product Reviews
                        </button>
                        <button 
                            className={`flex-1 py-3 px-6 rounded-md text-sm font-medium transition-all ${
                                activeTab === 'brand' 
                                ? 'bg-white shadow-sm text-gray-900' 
                                : 'hover:text-gray-900'
                            }`}
                            style={{
                                color: activeTab === 'brand' ? undefined : starColor
                            }}
                            onClick={() => setActiveTab('brand')}
                        >
                            Brand Reviews
                        </button>
                        <button 
                            className={`flex-1 py-3 px-6 rounded-md text-sm font-medium transition-all ${
                                activeTab === 'media' 
                                ? 'bg-white shadow-sm text-gray-900' 
                                : 'hover:text-gray-900'
                            }`}
                            style={{
                                color: activeTab === 'media' ? undefined : starColor
                            }}
                            onClick={() => setActiveTab('media')}
                        >
                            Media
                        </button>
                        <button 
                            className={`flex-1 py-3 px-6 rounded-md text-sm font-medium transition-all ${
                                activeTab === 'video' 
                                ? 'bg-white shadow-sm text-gray-900' 
                                : 'hover:text-gray-900'
                            }`}
                            style={{
                                color: activeTab === 'video' ? undefined : starColor
                            }}
                            onClick={() => setActiveTab('video')}
                        >
                            Video
                        </button>
                        <button 
                            className={`flex-1 py-3 px-6 rounded-md text-sm font-medium transition-all ${
                                activeTab === 'audio' 
                                ? 'bg-white shadow-sm text-gray-900' 
                                : 'hover:text-gray-900'
                            }`}
                            style={{
                                color: activeTab === 'audio' ? undefined : starColor
                            }}
                            onClick={() => setActiveTab('audio')}
                        >
                            Audio
                        </button>
                        <button 
                            className={`flex-1 py-3 px-6 rounded-md text-sm font-medium transition-all ${
                                activeTab === 'store' 
                                ? 'bg-white shadow-sm text-gray-900' 
                                : 'hover:text-gray-900'
                            }`}
                            style={{
                                color: activeTab === 'store' ? undefined : starColor
                            }}
                            onClick={() => {
                                setActiveTab('store');
                                setStoreView('store-visit');
                            }}
                        >
                            Our Stores
                        </button>
                    </div>

                    {/* Content After Tabs */}
                    {contentAfterTabs && activeTab === 'product' && (
                        <div className="mb-8">
                            {contentAfterTabs}
                        </div>
                    )}

                    {/* Brand Tab Content - AI Summary, Keywords, and Images */}
                    {activeTab === 'brand' && (
                        <div className="mb-8 space-y-8">
                            {/* Brand AI Insight Section */}
                            <div className="mb-8 bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-100">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-md flex items-center justify-center shadow-sm overflow-hidden">
                                            <img 
                                              src="https://img.freepik.com/premium-vector/generate-ai-abstract-vector-symbol-artificial-intelligence-colorful-stars-icon_34480-1539.jpg" 
                                              alt="AI Icon" 
                                              className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider font-['Space_Grotesk']">AI INSIGHT</h3>
                                    </div>
                                    <button className="px-3 py-1.5 text-xs font-medium rounded-full" style={{ backgroundColor: '#F3E8F0', color: '#8E6E82' }}>Verified reviews</button>
                                </div>
                                
                                <h4 className="text-xl font-bold text-gray-900 mb-2 font-['Inter']">Customers say about the brand</h4>
                                
                                <p className="text-gray-700 leading-relaxed mb-2 text-base font-['Inter']">
                                    {isBrandAISummaryExpanded ? (
                                        <>
                                            Customers love the brand for its consistent quality and excellent customer service. The brand is known for premium fabrics, elegant designs, and comfortable fits that flatter all body types. Many customers appreciate the brand's attention to detail and commitment to customer satisfaction. The brand has built a strong reputation for delivering stylish and well-made dresses that stand the test of time.
                                            <button onClick={() => setIsBrandAISummaryExpanded(false)} className="text-[#8E6E82] underline ml-1 cursor-pointer">Read less</button>
                                        </>
                                    ) : (
                                        <>
                                            Customers love the brand for its consistent quality and excellent customer service. The brand is known for premium fabrics, elegant designs, and comfortable fits that flatter all body types.
                                            <button onClick={() => setIsBrandAISummaryExpanded(true)} className="text-[#8E6E82] underline ml-1 cursor-pointer">Read more</button>
                                        </>
                                    )}
                                </p>
                                
                                <p className="text-xs text-gray-500 mb-4 font-['Space_Grotesk']">Updated in near real-time as new feedback arrives.</p>
                                
                                {/* Divider */}
                                <div className="border-t border-gray-200 mb-4"></div>
                                
                                {/* Brand Keywords */}
                                <div>
                                    <p className="text-sm font-medium text-gray-700 mb-2 font-['Inter'] uppercase tracking-wide">BRAND FREQUENTLY MENTIONED</p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Premium Quality', 'Excellent Customer Service', 'Reliable Brand', 'Elegant Designs', 'Comfortable Fit', 'Great Value'].map((item, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#a58296]"></span>
                                                <span className="text-sm font-semibold text-[#a58296] font-['Inter']">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Brand Review Images Section */}
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1 font-['Space_Grotesk']">BRAND REVIEW PHOTOS</h3>
                                        <p className="text-sm text-gray-600 font-['Space_Grotesk']">Real customer experiences with the brand</p>
                                    </div>
                                    <span className="text-sm text-gray-500 font-['Space_Grotesk']">{brandReviews.filter(r => r.images && r.images.length > 0).length} uploads</span>
                                </div>
                                
                                {/* Brand Review Images Gallery */}
                                <div className="flex gap-3 overflow-x-auto pb-4 mb-6">
                                    {brandReviews
                                        .filter(review => review.images && review.images.length > 0)
                                        .flatMap(review => review.images.map((img, i) => ({ src: img, review: review })))
                                        .map((item, i) => (
                                            <div 
                                                key={i} 
                                                className="shrink-0 w-32 h-32 bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                                                onClick={() => setSelectedImage({ src: item.src, review: item.review, index: 0 })}
                                            >
                                                <img 
                                                    src={item.src} 
                                                    alt={`Brand review ${i + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Reviews Container */}
                    <div>
                        {isMediaTab ? (
                            <div className="space-y-6">
                                <style>{`
                                    .instagram-media {
                                        max-width: 100% !important;
                                        width: 100% !important;
                                    }
                                    .instagram-media iframe {
                                        max-width: 100% !important;
                                        width: 100% !important;
                                    }
                                `}</style>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Community Media Wall</h3>
                                        <p className="text-sm text-gray-500">Instagram reels from our community.</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {mediaFilters.map((filter) => (
                                            <button
                                                key={filter.value}
                                                onClick={() => setMediaSourceFilter(filter.value)}
                                                className={`px-3 py-2 text-xs sm:text-sm rounded-lg border transition-colors ${
                                                    mediaSourceFilter === filter.value
                                                        ? 'bg-gray-900 text-white border-gray-900'
                                                        : 'bg-white text-gray-600 hover:border-gray-300 border-gray-200'
                                                }`}
                                            >
                                                {filter.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    {instagramReels.map((url, index) => (
                                        <div
                                            key={`insta-reel-${index}`}
                                            className="w-full max-w-full overflow-hidden"
                                            style={{ 
                                                maxWidth: '100%',
                                                boxSizing: 'border-box'
                                            }}
                                        >
                                            <div 
                                                className="w-full max-w-full"
                                                style={{ 
                                                    maxWidth: '100%',
                                                    width: '100%',
                                                    boxSizing: 'border-box'
                                                }}
                                                dangerouslySetInnerHTML={{ __html: createInstagramEmbed(url) }}
                                            />
                                                    </div>
                                    ))}
                                </div>
                            </div>
                        ) : isVideoTab ? (
                            <div className="space-y-6">
                                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                                    <h3 className="text-lg font-semibold text-gray-900">Video Highlights</h3>
                                    <p className="text-sm text-gray-500 mt-1">Short-form clips shared across Instagram and WhatsApp.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {filteredVideo.map((item) => (
                                        <div
                                            key={item.id}
                                            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm text-left transition-transform hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            <div className="relative overflow-hidden" style={{ aspectRatio: '9 / 16' }}>
                                                <video
                                                    src={item.src}
                                                    controls
                                                    playsInline
                                                    muted
                                                    className="h-full w-full object-cover"
                                                />
                                                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 to-black/0 p-3">
                                                    <div className="text-xs uppercase tracking-wide text-white/70">{item.platform}</div>
                                                    <div className="mt-1 text-sm font-semibold text-white">{item.title}</div>
                                                    <div className="text-xs text-white/60 mt-1">{item.uploadedAt}</div>
                                                    {item.link && (
                                                        <a
                                                            href={item.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="mt-2 inline-flex text-[11px] font-medium text-white/80 underline underline-offset-4 hover:text-white"
                                                        >
                                                            View Source ↗
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : isAudioTab ? (
                            <div className="space-y-6">
                                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                                    <h3 className="text-lg font-semibold text-gray-900">Audio Clips</h3>
                                    <p className="text-sm text-gray-500 mt-1">Voicenotes and sonic snippets sourced from the community.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {filteredAudio.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => setSelectedAudio(item)}
                                            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm text-left transition-transform hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            <div className="h-48 w-full bg-linear-to-br from-gray-900 via-gray-800 to-gray-700 flex flex-col items-center justify-center text-white gap-3">
                                                <span className="inline-flex items-center justify-center rounded-full bg-white/15 text-white p-4 shadow-lg transition-transform duration-300 group-hover:scale-110">
                                                    <Disc3 size={28} />
                                                </span>
                                                <div className="text-sm font-semibold">{item.title}</div>
                                                <div className="text-xs text-white/70">{item.platform} • {item.duration}</div>
                                                <div className="text-xs uppercase tracking-wide text-white/60">{item.mood}</div>
                                            </div>
                                            <div className="absolute inset-x-0 top-0 flex justify-end p-3">
                                                <span className="rounded-full bg-white text-gray-900 text-xs font-semibold px-2 py-1 shadow-md">
                                                    {item.uploadedAt}
                                                </span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : isStoreTab ? (
                            <div className="space-y-6">
                                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">Visit Our Stores</h3>
                                            <p className="text-sm text-gray-500 mt-1">Experience Baboski in person or see what guests are sharing from their visits.</p>
                                        </div>
                                        <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
                                            {storeTabOptions.map((tab) => (
                                                <button
                                                    key={tab.value}
                                                    onClick={() => {
                                                        setStoreView(tab.value);
                                                        if (tab.value !== 'in-store') {
                                                            setSelectedStore(null);
                                                        }
                                                    }}
                                                    className={`px-3 py-2 text-xs sm:text-sm rounded-md transition-all ${
                                                        storeView === tab.value ? 'bg-white shadow-sm text-gray-900' : 'hover:text-gray-900 text-gray-600'
                                                    }`}
                                                >
                                                    {tab.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {storeView === 'in-store' ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        {filteredStores.map((store) => (
                                            <button
                                                key={store.id}
                                                onClick={() => setSelectedStore(store)}
                                                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm text-left transition-transform hover:-translate-y-1 hover:shadow-lg"
                                            >
                                                <div className="relative h-56">
                                                    <img
                                                        src={store.image}
                                                        alt={store.name}
                                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                                                    <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow">
                                                        <div className="text-sm uppercase tracking-wide text-white/80">Baboski Store</div>
                                                        <div className="text-lg font-semibold">{store.name}</div>
                                                    </div>
                                                </div>
                                                <div className="p-5 space-y-2">
                                                    <div className="text-sm text-gray-600">{store.address}</div>
                                                    <div className="text-xs uppercase tracking-wide text-gray-400">{store.hours}</div>
                                                    <div className="text-sm font-medium text-gray-800">{store.phone}</div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {filteredStoreVisits.map((shot) => (
                                            <div
                                                key={shot.id}
                                                className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                                            >
                                                <div className="aspect-3/4 overflow-hidden">
                                                    <img
                                                        src={shot.image}
                                                        alt={shot.caption}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-4 space-y-2">
                                                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium text-gray-600 uppercase tracking-wide">{shot.badge}</span>
                                                    <p className="text-sm text-gray-700 leading-relaxed">{shot.caption}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
            {/* Review Count and Filter Controls */}
            <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-gray-600">
                    Showing {currentReviews.length} of {allFilteredReviews.length} {activeTab} review{allFilteredReviews.length !== 1 ? 's' : ''}
                    {filterBy !== 'recent' && ` (${filterBy.replace('-', ' ')})`}
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 font-medium">Sort & Filter:</span>
                    <select 
                        value={filterBy}
                        onChange={(e) => setFilterBy(e.target.value)}
                        className="px-4 py-2 text-sm border-2 border-gray-200 rounded-lg bg-white text-gray-700 focus:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-100 transition-all cursor-pointer hover:border-gray-300"
                        style={{ 
                            backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                            backgroundPosition: 'right 0.5rem center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '1.5em 1.5em',
                            paddingRight: '2.5rem',
                            appearance: 'none'
                        }}
                    >
                        <option value="recent">Most Recent</option>
                        <option value="highest">Highest Rated</option>
                        <option value="lowest">Lowest Rated</option>
                        <option value="verified">Verified Only</option>
                        <option value="with-media">With Photos</option>
                    </select>
                </div>
            </div>

            {/* Reviews List */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6">
                {currentReviews.map((rev, idx) => (
                    <div key={idx} className="relative overflow-hidden border border-gray-100 rounded-none p-2.5 sm:p-3 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md border-b" style={{ borderBottomColor: starColor }}>
                        <div
                            className="pointer-events-none absolute inset-0 opacity-15"
                            style={{
                                background:
                                    'radial-gradient(circle at 0% 0%, rgba(255, 204, 230, 0.7) 18%, transparent 40%), radial-gradient(circle at 100% 100%, rgba(255, 217, 238, 0.7) 18%, transparent 42%)'
                            }}
                        />
                        {/* Header */}
                        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-2">
                            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                                <div 
                                    className="w-7 h-7 sm:w-8 sm:h-8 text-white flex items-center justify-center text-[10px] sm:text-xs font-semibold uppercase border-2"
                                    style={{ backgroundColor: starColor, borderColor: starColor }}
                                >
                                    {rev.name.slice(0, 2)}
                                </div>
                                <div className="truncate">
                                    <div className="text-sm sm:text-base font-semibold truncate">{rev.name}</div>
                                    <div className="text-[10px] sm:text-[11px] text-gray-500 truncate">{rev.location}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 border border-green-300 text-green-700">Verified</span>
                                <div className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">{rev.date}</div>
                            </div>
                        </div>

                        <div className="border-t mt-1.5 sm:mt-2" style={{ borderColor: palette.border }} />

                        <div className="flex items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3 mb-1.5 sm:mb-2">
                            <div className="flex items-center space-x-0.5 sm:space-x-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} size={12} className="fill-current" style={{ color: i <= rev.rating ? starColor : '#E5E7EB', fill: i <= rev.rating ? starColor : '#E5E7EB' }} />
                                ))}
                            </div>
                        </div>
                        {rev.title && (
                            <div className="text-[15px] sm:text-[15px] font-semibold text-gray-800 mb-1">{rev.title}</div>
                        )}
                        <ReviewText text={rev.text} />

                        {/* Images and Action Buttons Row */}
                        <div className="flex items-center justify-between mt-2 sm:mt-3">
                            {/* Images */}
                            {rev.images && rev.images.length > 0 ? (
                                <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto sm:overflow-visible max-w-full pr-1 -mr-1 scroll-smooth *:snap-start sm:*:snap-none">
                                    {rev.images.map((src, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedImage({ src, review: rev, index: i })}
                                            className="w-12 h-12 sm:w-12 sm:h-12 rounded-none border border-gray-200 shadow-sm opacity-90 hover:opacity-100 hover:scale-[1.02] transition cursor-pointer shrink-0 bg-white"
                                        >
                                            <img
                                                src={src}
                                                alt="Review image"
                                                className="w-full h-full object-cover"
                                                style={{ filter: 'grayscale(15%)' }}
                                            />
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div />
                            )}

                            {/* Action Buttons */}
                            <div className="flex gap-2">
                                {showExtras ? (
                                    <>
                                        {/* Like button for WOM */}
                                        <button 
                                            onClick={() => {
                                                setReviewReactions(prev => {
                                                    const newReactions = { ...prev };
                                                    const current = newReactions[idx] || { helpful: 0, notHelpful: 0, userReacted: null };
                                                    if (current.userReacted === 'helpful') {
                                                        // Already liked, remove like
                                                        newReactions[idx] = { ...current, helpful: Math.max(0, current.helpful - 1), userReacted: null };
                                                    } else {
                                                        // Like it
                                                        const wasNotHelpful = current.userReacted === 'notHelpful';
                                                        newReactions[idx] = { 
                                                            ...current, 
                                                            helpful: current.helpful + 1,
                                                            notHelpful: wasNotHelpful ? Math.max(0, current.notHelpful - 1) : current.notHelpful,
                                                            userReacted: 'helpful' 
                                                        };
                                                    }
                                                    return newReactions;
                                                });
                                            }}
                                            className={`flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg transition-colors ${
                                                reviewReactions[idx]?.userReacted === 'helpful'
                                                    ? 'bg-[#a58296] text-white hover:bg-[#8e6d82]'
                                                    : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
                                            }`}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                            </svg>
                                            {reviewReactions[idx]?.helpful === 0 && (
                                                <span className="font-medium">Like</span>
                                            )}
                                            {reviewReactions[idx]?.helpful > 0 && (
                                                <span className="font-medium">{reviewReactions[idx].helpful}</span>
                                            )}
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        {/* Thumbs up/down buttons for non-WOM */}
                                        <button 
                                            onClick={() => {
                                                setReviewReactions(prev => {
                                                    const newReactions = { ...prev };
                                                    const current = newReactions[idx] || { helpful: 0, notHelpful: 0, userReacted: null };
                                                    if (current.userReacted === 'helpful') {
                                                        newReactions[idx] = { ...current, helpful: Math.max(0, current.helpful - 1), userReacted: null };
                                                    } else {
                                                        const wasNotHelpful = current.userReacted === 'notHelpful';
                                                        newReactions[idx] = { 
                                                            ...current, 
                                                            helpful: current.helpful + 1,
                                                            notHelpful: wasNotHelpful ? Math.max(0, current.notHelpful - 1) : current.notHelpful,
                                                            userReacted: 'helpful' 
                                                        };
                                                    }
                                                    return newReactions;
                                                });
                                            }}
                                            className={`flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg transition-colors ${
                                                reviewReactions[idx]?.userReacted === 'helpful'
                                                    ? 'bg-[#a58296] text-white hover:bg-[#8e6d82]'
                                                    : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
                                            }`}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                            </svg>
                                    <span className="font-medium">Helpful</span>
                                            {reviewReactions[idx]?.helpful > 0 && (
                                                <span className="ml-1">({reviewReactions[idx].helpful})</span>
                                            )}
                                </button>
                                        <button 
                                            onClick={() => {
                                                setReviewReactions(prev => {
                                                    const newReactions = { ...prev };
                                                    const current = newReactions[idx] || { helpful: 0, notHelpful: 0, userReacted: null };
                                                    if (current.userReacted === 'notHelpful') {
                                                        newReactions[idx] = { ...current, notHelpful: Math.max(0, current.notHelpful - 1), userReacted: null };
                                                    } else {
                                                        const wasHelpful = current.userReacted === 'helpful';
                                                        newReactions[idx] = { 
                                                            ...current, 
                                                            notHelpful: current.notHelpful + 1,
                                                            helpful: wasHelpful ? Math.max(0, current.helpful - 1) : current.helpful,
                                                            userReacted: 'notHelpful' 
                                                        };
                                                    }
                                                    return newReactions;
                                                });
                                            }}
                                            className={`flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg transition-colors ${
                                                reviewReactions[idx]?.userReacted === 'notHelpful'
                                                    ? 'bg-red-100 text-red-700 hover:bg-red-200'
                                                    : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
                                            }`}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                                            </svg>
                                            <span className="font-medium">Not Helpful</span>
                                            {reviewReactions[idx]?.notHelpful > 0 && (
                                                <span className="ml-1">({reviewReactions[idx].notHelpful})</span>
                                            )}
                                        </button>
                                    </>
                                )}
                                <button 
                                    onClick={() => setShowLoginModal(true)}
                                    className="flex items-center gap-1 px-3 py-1.5 text-xs text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <span className="font-medium">Reply</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                            </>
                        )}

                        {/* Review Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 backdrop-blur-[1px] flex justify-center items-center z-50 p-6"
                    style={{
                        background: `linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(165, 130, 150, 0.1) 100%)`
                    }}
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="bg-white rounded-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 w-8 h-8 bg-gray-800 bg-opacity-80 text-white rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all z-10 shadow-lg"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>

                        {/* Left side - Image */}
                        <div className="bg-gray-50 relative">
                            <img
                                src={selectedImage.src}
                                alt={`${selectedImage.review.name} review`}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right side - Review Details */}
                        <div className="p-8 bg-linear-to-br from-gray-50 to-white">
                            <div className="flex items-center gap-4 mb-4">
                                <div 
                                    className="w-12 h-12 text-white flex items-center justify-center text-sm font-semibold uppercase rounded-full border-2"
                                    style={{ backgroundColor: starColor, borderColor: starColor }}
                                >
                                    {selectedImage.review.name.slice(0, 2)}
                                </div>
                                <div>
                                    <div className="font-semibold text-lg text-gray-900">{selectedImage.review.name}</div>
                                    <div className="text-sm text-gray-500">{selectedImage.review.location}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-1 mb-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} size={18} className="fill-current" style={{ color: i <= selectedImage.review.rating ? starColor : '#E5E7EB', fill: i <= selectedImage.review.rating ? starColor : '#E5E7EB' }} />
                                ))}
                            </div>

                            {selectedImage.review.title && (
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">{selectedImage.review.title}</h3>
                            )}

                            <p className="text-gray-700 leading-relaxed mb-6">"{selectedImage.review.text}"</p>

                            <div className="border-t pt-4">
                                <div className="text-sm text-gray-500 mb-2">Product Reviewed</div>
                                <div className="font-medium text-gray-800">{selectedImage.review.item}</div>
                                <div className="text-sm text-gray-500 mt-2">{selectedImage.review.date}</div>
                            </div>

                            <div className="flex gap-3 mt-6">
                                <button className="flex-1 py-2 px-4 bg-transparent border-2 text-sm font-medium rounded-lg transition-colors hover:bg-pink-50" style={{ borderColor: palette.star, color: palette.star }}>
                                    Helpful
                                </button>
                                <button className="flex-1 py-2 px-4 bg-transparent border-2 text-sm font-medium rounded-lg transition-colors hover:bg-pink-50" style={{ borderColor: palette.star, color: palette.star }}>
                                    Reply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

                        {/* Media Modal */}
                        {selectedMedia && (
                            <div
                                className="fixed inset-0 backdrop-blur-[1px] flex justify-center items-center z-50 p-6"
                                style={{
                                    background: `linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(165, 130, 150, 0.1) 100%)`
                                }}
                                onClick={() => setSelectedMedia(null)}
                            >
                                <div
                                    className="bg-white rounded-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        className="absolute top-4 right-4 w-8 h-8 bg-gray-800 bg-opacity-80 text-white rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all z-10 shadow-lg"
                                        onClick={() => setSelectedMedia(null)}
                                    >
                                        ×
                                    </button>
                                    <div className="bg-gray-50 flex items-center justify-center p-6">
                                        <img
                                            src={selectedMedia.src}
                                            alt={`${selectedMedia.sourceLabel} feature`}
                                            className="max-h-[420px] w-full object-contain rounded-xl shadow-md"
                                        />
                    </div>
                                    <div className="p-8 flex flex-col gap-4">
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                                                    selectedMedia.source === 'instagram'
                                                        ? 'bg-pink-100 text-pink-700'
                                                        : 'bg-emerald-100 text-emerald-700'
                                                }`}
                                            >
                                                {selectedMedia.sourceLabel}
                                            </span>
                                            <span className="text-sm text-gray-500">{selectedMedia.uploadedAt}</span>
                                        </div>
                                        <div className="text-base font-semibold text-gray-900">{selectedMedia.handle}</div>
                                        {selectedMedia.source === 'instagram' && selectedMedia.link && (
                                            <a
                                                href={selectedMedia.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm font-medium text-pink-600 hover:text-pink-700"
                                            >
                                                View on Instagram ↗
                                            </a>
                                        )}
                        </div>
                    </div>
                </div>
            )}

                        {/* Audio Modal */}
                        {selectedAudio && (
                            <div
                                className="fixed inset-0 backdrop-blur-[1px] flex justify-center items-center z-50 p-6"
                                style={{
                                    background: `linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(165, 130, 150, 0.1) 100%)`
                                }}
                                onClick={() => setSelectedAudio(null)}
                            >
                                <div
                                    className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        className="absolute top-4 right-4 w-8 h-8 bg-gray-800 bg-opacity-80 text-white rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all z-10 shadow-lg"
                                        onClick={() => setSelectedAudio(null)}
                                    >
                                        ×
                                    </button>
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        <div className="flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-700 p-10">
                                            <div className="flex flex-col items-center gap-4 text-white">
                                                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-white shadow-xl">
                                                    <Disc3 size={36} />
                                                </span>
                                                <div className="text-xs uppercase tracking-wide text-white/60">{selectedAudio.platform}</div>
                                                <div className="text-lg font-semibold text-white text-center">{selectedAudio.title}</div>
                                                <div className="text-xs text-white/60">{selectedAudio.uploadedAt} • {selectedAudio.duration}</div>
                                            </div>
                                        </div>
                                        <div className="p-8 flex flex-col gap-4">
                                            <div className="text-sm font-semibold text-gray-900">Listen</div>
                                            <audio controls className="w-full">
                                                <source src={selectedAudio.src} type="audio/mpeg" />
                                                Your browser does not support the audio element.
                                            </audio>
                                            {selectedAudio.link && (
                                                <a
                                                    href={selectedAudio.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm font-medium text-pink-600 hover:text-pink-700"
                                                >
                                                    Open full track ↗
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Store Modal */}
                        {selectedStore && (
                            <div
                                className="fixed inset-0 backdrop-blur-[1px] flex justify-center items-center z-50 p-6"
                                style={{
                                    background: `linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(165, 130, 150, 0.1) 100%)`
                                }}
                                onClick={() => setSelectedStore(null)}
                            >
                                <div
                                    className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        className="absolute top-4 right-4 w-8 h-8 bg-gray-800 bg-opacity-80 text-white rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all z-10 shadow-lg"
                                        onClick={() => setSelectedStore(null)}
                                    >
                                        ×
                                    </button>
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        <div className="h-full">
                                            <img
                                                src={selectedStore.image}
                                                alt={selectedStore.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="p-8 space-y-4">
                                            <div>
                                                <div className="text-xs uppercase tracking-wide text-gray-400">Baboski Store</div>
                                                <div className="text-xl font-semibold text-gray-900 mt-1">{selectedStore.name}</div>
                                            </div>
                                            <div className="space-y-2 text-sm text-gray-600">
                                                <div>{selectedStore.address}</div>
                                                <div className="font-medium text-gray-800">{selectedStore.phone}</div>
                                                <div className="text-xs uppercase tracking-wide text-gray-400">Hours</div>
                                                <div>{selectedStore.hours}</div>
                                            </div>
                                            <div className="text-xs text-gray-400 uppercase tracking-wide">Book an appointment</div>
                                            <button className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
                                                Schedule Visit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Review Form Modal */}
            {showReviewForm && (
                <ReviewFormModal
                    onClose={() => setShowReviewForm(false)}
                    onSubmit={handleSubmitReview}
                    activeTab={activeTab}
                    starColor={starColor}
                />
            )}
            
            {/* Login Modal for Reply */}
            {showLoginModal && (
                <LoginModal
                    onClose={() => setShowLoginModal(false)}
                />
            )}
        </section>
    );
};

// Review Form Modal Component
function ReviewFormModal({ onClose, onSubmit, activeTab, starColor }) {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        title: '',
        text: '',
        rating: 5,
        item: activeTab === 'product' ? 'Product' : 'Baboski Brand Experience'
    });
    const [hoveredStar, setHoveredStar] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.text || !formData.rating) {
            alert('Please fill in all required fields');
            return;
        }
        onSubmit(formData);
    };

    return (
        <div
            className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50 p-4 md:p-6"
            style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(165, 130, 150, 0.1) 100%)'
            }}
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
                    <h2 className="text-2xl font-bold text-gray-900 font-['Space_Grotesk']">Write a Review</h2>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors"
                    >
                        ×
                    </button>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a58296] focus:border-transparent"
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Location
                        </label>
                        <input
                            type="text"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a58296] focus:border-transparent"
                            placeholder="City, State"
                        />
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Rating <span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, rating: star })}
                                    onMouseEnter={() => setHoveredStar(star)}
                                    onMouseLeave={() => setHoveredStar(0)}
                                    className="focus:outline-none"
                                >
                                    <svg
                                        className="w-8 h-8 transition-transform hover:scale-110"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8 0L10.06 5.51L16 6.18L12 10.15L12.94 16L8 13.18L3.06 16L4 10.15L0 6.18L5.94 5.51L8 0Z"
                                            fill={
                                                star <= (hoveredStar || formData.rating)
                                                    ? starColor
                                                    : '#E5E7EB'
                                            }
                                        />
                                    </svg>
                                </button>
                            ))}
                            <span className="ml-2 text-sm text-gray-600">
                                {formData.rating} {formData.rating === 1 ? 'star' : 'stars'}
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Review Title (Optional)
                        </label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a58296] focus:border-transparent"
                            placeholder="Give your review a title"
                        />
                    </div>

                    {/* Review Text */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Review <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            required
                            value={formData.text}
                            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                            rows={3}
                            style={{ minHeight: 'calc(3rem + 20px)' }}
                            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a58296] focus:border-transparent resize-none"
                            placeholder="Share your experience..."
                        />
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex gap-3 pt-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-4 py-2 bg-[#a58296] text-white rounded-lg text-sm font-medium hover:bg-[#8e6d82] transition-colors"
                        >
                            Submit Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ReviewCards;

// Support component: clamp review text with Read more/less
function ReviewText({ text }) {
    const [expanded, setExpanded] = React.useState(false);
    const MAX_CHARS = 180;
    const isLong = text.length > MAX_CHARS;
    const visible = expanded || !isLong ? text : text.slice(0, MAX_CHARS) + '…';

    return (
        <div className="text-[15px] sm:text-[15px] text-gray-700 leading-relaxed">
            <p>{visible}</p>
            {isLong && (
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-1 text-[10px] sm:text-xs underline text-pink-600 hover:text-pink-700"
                >
                    {expanded ? 'Read less' : 'Read more'}
                </button>
            )}
        </div>
    );
}