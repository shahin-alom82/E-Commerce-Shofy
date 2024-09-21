import Container from "../ui/Container";

const Loaader = () => {
      return <Container className="py-80">
            <div className="flex items-center justify-center gap-4 text-2xl text-gray-700">
                  Loading...
                  <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
            </div>

      </Container>;
};

export default Loaader;