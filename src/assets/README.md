# Assets Management

This directory contains centralized configuration for all static assets (images, videos) used throughout the application.

## Structure

```
src/assets/
├── index.ts           # Main export file
├── images.config.ts   # Image URLs configuration
├── videos.config.ts   # Video URLs configuration
├── images/           # Physical image files (when needed)
│   ├── decorative/
│   ├── episodes/
│   ├── logos/
│   └── speakers/
└── videos/           # Physical video files (when needed)
    ├── episodes/
    └── reels/
```

## Usage

### Import Assets

```typescript
// Import all assets
import { IMAGES, VIDEOS } from "@/assets";

// Import specific categories
import { DECORATIVE_IMAGES, ICONS, SPEAKER_IMAGES } from "@/assets";
import { SAMPLE_VIDEOS } from "@/assets";
```

### Use in Components

```typescript
// Using decorative images
<img src={IMAGES.decorative.manInHeadphones} alt="..." />

// Using icons
<img src={IMAGES.icons.playCircle} alt="..." />

// Using videos
<video src={VIDEOS.samples.bigBuckBunny} />
```

## Asset Categories

### Images

- **decorative**: Background and decorative images
- **speakers**: Speaker profile photos
- **episodes**: Episode thumbnail images
- **videoThumbnails**: Video preview thumbnails
- **keyQuestions**: Key questions section images
- **logos**: Brand and partner logos
- **icons**: UI icons (arrows, play buttons, etc.)
- **navigation**: Navigation arrows (back/next)

### Videos

- **samples**: Sample/demo videos (currently using Google Storage)
- **episodes**: Production episode videos
- **reels**: Short-form reel videos

## Benefits

✅ **Centralized Management**: All URLs in one place
✅ **Easy Updates**: Change URLs without touching components
✅ **Type Safety**: TypeScript autocomplete for all assets
✅ **Consistency**: Same assets used across all pages
✅ **Performance**: Easier to implement lazy loading/optimization
✅ **Maintenance**: Find and replace assets easily

## Migration Status

### ✅ Completed

- Created assets folder structure
- Created centralized configuration files
- Updated data files (chapterData.ts, videoSlideData.ts)

### 🔄 In Progress

- Updating component files to use centralized assets

### ⏳ Pending

- Replace external URLs with local assets (when available)
- Add image optimization
- Implement lazy loading

## Future Improvements

1. **Local Assets**: Replace CDN URLs with local files
2. **Image Optimization**: Add next-gen formats (WebP, AVIF)
3. **Lazy Loading**: Implement progressive image loading
4. **Asset Pipeline**: Add build-time optimization
5. **CDN Integration**: Connect to production CDN
