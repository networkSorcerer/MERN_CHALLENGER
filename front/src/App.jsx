import AppLayout from "./Layout/AppLayout.jsx";
import AppRouter from "./routes/AppRouter.jsx";

function App() {
  return (
    <div>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </div>
  );
}

export default App;
