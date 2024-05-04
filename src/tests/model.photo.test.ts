import {Photo} from '../models/photo.model'

describe('testing photo model', ()=>{
    test('should convert jsonString to attributes correctly', ()=>{
        const jsonStringExample=`[
            {
              "id": "ugnrXk1129g",
              "slug": "aerial-photo-of-green-trees-ugnrXk1129g",
              "alternative_slugs": {
                "en": "aerial-photo-of-green-trees-ugnrXk1129g",
                "es": "foto-aerea-de-arboles-verdes-ugnrXk1129g",
                "ja": "緑の木々の航空写真-ugnrXk1129g",
                "fr": "photo-aerienne-darbres-verts-ugnrXk1129g",
                "it": "foto-aerea-di-alberi-verdi-ugnrXk1129g",
                "ko": "푸른-나무의-항공-사진-ugnrXk1129g",
                "de": "luftaufnahme-von-grunen-baumen-ugnrXk1129g",
                "pt": "foto-aerea-de-arvores-verdes-ugnrXk1129g"
              },
              "created_at": "2018-11-15T09:40:42Z",
              "updated_at": "2024-05-03T14:18:49Z",
              "promoted_at": "2018-11-15T09:49:09Z",
              "width": 4288,
              "height": 2848,
              "color": "#d9d9d9",
              "blur_hash": "L*GSiZj[IUoM~qkBNGj[-pj[ofay",
              "description": "This photo was taken in the high mountains of Adjara, Georgia, while I was doing my project there. It was summer, but the temperature didn’t feel like it. I spent most of my days standing in front of this amazing view, thinking about the life that was waiting for me back in capital. Suddenly, I  had a very strong desire to talk with the fog. Loudly. Thought it had many stories to tell too.",
              "alt_description": "aerial photo of green trees",
              "breadcrumbs": [
                {
                  "slug": "images",
                  "title": "1,000,000+ Free Images",
                  "index": 0,
                  "type": "landing_page"
                },
                {
                  "slug": "nature",
                  "title": "Nature Images",
                  "index": 1,
                  "type": "landing_page"
                }
              ],
              "urls": {
                "raw": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixid=M3w1OTY5NzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQ3ODQ0NTF8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1OTY5NzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQ3ODQ0NTF8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTY5NzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQ3ODQ0NTF8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTY5NzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQ3ODQ0NTF8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTY5NzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQ3ODQ0NTF8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1542273917363-3b1817f69a2d"
              },
              "links": {
                "self": "https://api.unsplash.com/photos/aerial-photo-of-green-trees-ugnrXk1129g",
                "html": "https://unsplash.com/photos/aerial-photo-of-green-trees-ugnrXk1129g",
                "download": "https://unsplash.com/photos/ugnrXk1129g/download?ixid=M3w1OTY5NzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQ3ODQ0NTF8",
                "download_location": "https://api.unsplash.com/photos/ugnrXk1129g/download?ixid=M3w1OTY5NzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQ3ODQ0NTF8"
              },
              "likes": 2947,
              "liked_by_user": false,
              "current_user_collections": [],
              "sponsorship": null,
              "topic_submissions": {
                "nature": {
                  "status": "approved",
                  "approved_on": "2020-04-06T14:20:12Z"
                },
                "wallpapers": {
                  "status": "approved",
                  "approved_on": "2021-05-14T13:20:22Z"
                }
              },
              "asset_type": "photo",
              "user": {
                "id": "YevwEgUf1do",
                "updated_at": "2024-03-18T15:02:38Z",
                "username": "maritaextrabold",
                "name": "Marita Kavelashvili",
                "first_name": "Marita",
                "last_name": "Kavelashvili",
                "twitter_username": null,
                "portfolio_url": null,
                "bio": null,
                "location": "Tbilisi,Georgia",
                "links": {
                  "self": "https://api.unsplash.com/users/maritaextrabold",
                  "html": "https://unsplash.com/@maritaextrabold",
                  "photos": "https://api.unsplash.com/users/maritaextrabold/photos",
                  "likes": "https://api.unsplash.com/users/maritaextrabold/likes",
                  "portfolio": "https://api.unsplash.com/users/maritaextrabold/portfolio",
                  "following": "https://api.unsplash.com/users/maritaextrabold/following",
                  "followers": "https://api.unsplash.com/users/maritaextrabold/followers"
                },
                "profile_image": {
                  "small": "https://images.unsplash.com/profile-1542273769119-89bf9760a424?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                  "medium": "https://images.unsplash.com/profile-1542273769119-89bf9760a424?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                  "large": "https://images.unsplash.com/profile-1542273769119-89bf9760a424?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "maritaextrabold",
                "total_collections": 1,
                "total_likes": 0,
                "total_photos": 1,
                "total_promoted_photos": 3,
                "total_illustrations": 0,
                "total_promoted_illustrations": 0,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                  "instagram_username": "maritaextrabold",
                  "portfolio_url": null,
                  "twitter_username": null,
                  "paypal_email": null
                }
              },
              "exif": {
                "make": "NIKON CORPORATION",
                "model": "NIKON D90",
                "name": "NIKON CORPORATION, NIKON D90",
                "exposure_time": "1/4000",
                "aperture": "2.8",
                "focal_length": "40.0",
                "iso": 1000
              },
              "location": {
                "name": "Adjara, Georgia",
                "city": null,
                "country": "Georgia",
                "position": {
                  "latitude": 41.6005626,
                  "longitude": 42.0688382999999
                }
              },
              "views": 39039850,
              "downloads": 466845
            }
          ]`
        const photo= Photo.fromJson(jsonStringExample)
        expect(photo.id).toBe(0)
        expect(photo.url).toBe("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTY5NzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQ3ODQ0NTF8&ixlib=rb-4.0.3&q=80&w=1080")
        expect(photo.description).toBe("This photo was taken in the high mountains of Adjara, Georgia, while I was doing my project there. It was summer, but the temperature didn’t feel like it. I spent most of my days standing in front of this amazing view, thinking about the life that was waiting for me back in capital. Suddenly, I  had a very strong desire to talk with the fog. Loudly. Thought it had many stories to tell too.")
        expect(photo.author).toBe('Marita Kavelashvili')
    })
})