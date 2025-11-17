import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Play, X, Plus, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  type: "image" | "video";
  thumbnail: string;
  videoUrl?: string;
  description: string;
}

// Sample portfolio items - replace with your actual work
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Sample Social Media Campaign",
    category: "Social Media",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    description: "Instagram content strategy for e-commerce brand",
  },
  {
    id: 2,
    title: "Product Listing Design",
    category: "E-commerce",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "Optimized product listings with enhanced visuals",
  },
  {
    id: 3,
    title: "Content Calendar Sample",
    category: "Social Media",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    description: "30-day content planning and scheduling",
  },
  {
    id: 4,
    title: "Video Content Creation",
    category: "Content Creation",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Short-form video content for TikTok and Reels",
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    category: "Analytics",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description: "Social media performance tracking and reporting",
  },
  {
    id: 6,
    title: "Brand Identity Package",
    category: "Design",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    description: "Complete brand guidelines and visual assets",
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newWork, setNewWork] = useState({
    title: "",
    category: "",
    type: "image" as "image" | "video",
    thumbnail: "",
    videoUrl: "",
    description: "",
  });
  const { toast } = useToast();

  const categories = ["All", ...Array.from(new Set(portfolioItems.map((item) => item.category)))];

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const handleAddWork = () => {
    // For now, just show a success message
    // In a real app, you would upload to a backend/storage
    toast({
      title: "Work Added Successfully!",
      description: `"${newWork.title}" has been added to your portfolio.`,
    });
    
    setShowAddModal(false);
    setNewWork({
      title: "",
      category: "",
      type: "image",
      thumbnail: "",
      videoUrl: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Explore my collection of work samples showcasing social media management, e-commerce support, and content creation projects.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Add Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
            <Button
              onClick={() => setShowAddModal(true)}
              className="bg-accent hover:bg-accent/90 rounded-full"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Work
            </Button>
          </div>
        </div>
      </section>

      {/* Add Work Modal */}
      {showAddModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setShowAddModal(false)}
        >
          <div
            className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-background border-b p-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Add New Work</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowAddModal(false)}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  placeholder="Enter project title"
                  value={newWork.title}
                  onChange={(e) => setNewWork({ ...newWork, title: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={newWork.category}
                  onValueChange={(value) => setNewWork({ ...newWork, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Social Media">Social Media</SelectItem>
                    <SelectItem value="E-commerce">E-commerce</SelectItem>
                    <SelectItem value="Content Creation">Content Creation</SelectItem>
                    <SelectItem value="Analytics">Analytics</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Type *</Label>
                <Select
                  value={newWork.type}
                  onValueChange={(value: "image" | "video") => setNewWork({ ...newWork, type: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="image">Image</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="thumbnail">Thumbnail Image URL *</Label>
                <Input
                  id="thumbnail"
                  placeholder="https://example.com/image.jpg"
                  value={newWork.thumbnail}
                  onChange={(e) => setNewWork({ ...newWork, thumbnail: e.target.value })}
                />
                <p className="text-sm text-muted-foreground">
                  Paste an image URL or upload to a service like Imgur
                </p>
              </div>

              {newWork.type === "video" && (
                <div className="space-y-2">
                  <Label htmlFor="videoUrl">Video URL (YouTube Embed)</Label>
                  <Input
                    id="videoUrl"
                    placeholder="https://www.youtube.com/embed/..."
                    value={newWork.videoUrl}
                    onChange={(e) => setNewWork({ ...newWork, videoUrl: e.target.value })}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your work..."
                  value={newWork.description}
                  onChange={(e) => setNewWork({ ...newWork, description: e.target.value })}
                  rows={4}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleAddWork}
                  className="flex-1 bg-accent hover:bg-accent/90"
                  disabled={!newWork.title || !newWork.category || !newWork.thumbnail || !newWork.description}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Add Work
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" />
                      </div>
                    </div>
                  )}
                  <Badge className="absolute top-3 right-3 bg-primary/90">
                    {item.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal for viewing item details */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-background border-b p-4 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
                <Badge className="mt-2">{selectedItem.category}</Badge>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedItem(null)}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            <div className="p-6">
              {selectedItem.type === "video" && selectedItem.videoUrl ? (
                <div className="aspect-video">
                  <iframe
                    src={selectedItem.videoUrl}
                    title={selectedItem.title}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                  />
                </div>
              ) : (
                <img
                  src={selectedItem.thumbnail}
                  alt={selectedItem.title}
                  className="w-full rounded-lg"
                />
              )}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
