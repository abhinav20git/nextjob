export default function SearchBar({ location, setLocation, filter, setFilter }) {
    
  
    return (
      <section className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-gray-50 gap-4">
        <input
          type="text"
          placeholder="Search by location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-3 py-2 border rounded-md text-sm w-full sm:w-64"
        />
  
      
      </section>
    );
  }
  