import { createRoot } from "react-dom/client";
import { Chart, registerables } from "chart.js";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// Apps
import "assets/sass/style.scss";
import "assets/sass/plugins.scss";
import "assets/sass/style.react.scss";
import { AppRoutes } from "routes/AppRoutes";
import { RecoilRoot } from "recoil";

Chart.register(...registerables);

const queryClient = new QueryClient();
const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <AppRoutes />
        <ReactQueryDevtools initialIsOpen={false} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
