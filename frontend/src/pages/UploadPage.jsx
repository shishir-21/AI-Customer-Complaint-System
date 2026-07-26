import { useState } from "react";

import ComplaintForm from "../components/complaint/ComplaintForm";
import CopilotPanel from "../components/copilot/CopilotPanel";

import AppLayout from "../components/layout/AppLayout";
import LeftPanel from "../components/layout/LeftPanel";
import RightPanel from "../components/layout/RightPanel";

function UploadPage() {

    const [aiResult, setAiResult] = useState(null);

    return (

        <AppLayout

            left={

                <LeftPanel>

                    <ComplaintForm
                        aiResult={aiResult}
                    />

                </LeftPanel>

            }

            right={

                <RightPanel>

                    <CopilotPanel
                        onAIResult={setAiResult}
                    />

                </RightPanel>

            }

        />

    );

}

export default UploadPage;
