import Hero from "@/components/Home/Hero";
import EventCard from "@/components/Shared/EventCard";
import StaticEventCard from "@/components/Shared/StaticEventCard";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-[1400px] mx-auto px-[40px] justify-center flex items-center flex-wrap gap-4">
        <EventCard
          title="title"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgCPQmyPHrOWxnUvbmQIRwOipjW8woZUreA&s"
          date="date"
          time="time"
          location="location"
          price="$1000"
        />
        <EventCard
          title="title"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgCPQmyPHrOWxnUvbmQIRwOipjW8woZUreA&s"
          date="date"
          time="time"
          location="location"
          price="$1000"
        />
        <EventCard
          title="title"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgCPQmyPHrOWxnUvbmQIRwOipjW8woZUreA&s"
          date="date"
          time="time"
          location="location"
          price="$1000"
        />
      </div>
      <div className="max-w-[1400px] mx-auto px-[40px] justify-center flex items-center flex-wrap gap-4">
        <StaticEventCard />
      </div>
    </>
  );
}
