import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MultiStepForm } from "./MultiStepForm";
import { InputText } from "../Inputs/Text/InputText"; 

const meta: Meta<typeof MultiStepForm> = {
  title: "GoodFood/MultiStepForm",
  component: MultiStepForm,
};
export default meta;
type Story = StoryObj<typeof MultiStepForm>;

export const Default: Story = {
  render: () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [bio, setBio] = useState("");

    // validation simple
    const onBeforeNext = async (step: number) => {
      if (step === 0) {
        if (name.trim().length < 2) {
          alert("Le nom doit faire au moins 2 caractères");
          return false;
        }
      }
      if (step === 1) {
        if (password.length < 6) {
          alert("Mot de passe trop court (6 caractères minimum)");
          return false;
        }
        if (password !== confirm) {
          alert("Les mots de passe ne correspondent pas");
          return false;
        }
      }
      return true;
    };

    const onFinish = () => {
      alert(
        `🎉 Formulaire terminé !\n\nNom: ${name}\nMot de passe: ${password}\nBio: ${bio}`
      );
    };

    return (
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Demo MultiStepForm</h2>

        <MultiStepForm
          onBeforeNext={onBeforeNext}
          onFinish={onFinish}
          showDefaultActions
        >
          <MultiStepForm.Step>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Nom</label>
              <InputText
                value={name}
                onChange={(e: any) => setName(e.target.value)}
                placeholder="Ex: Paul"
              />
            </div>
          </MultiStepForm.Step>

          <MultiStepForm.Step>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Mot de passe</label>
              <InputText
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                placeholder="••••••"
              />
              <label className="block text-sm font-medium">Confirmation</label>
              <InputText
                type="password"
                value={confirm}
                onChange={(e: any) => setConfirm(e.target.value)}
                placeholder="••••••"
              />
            </div>
          </MultiStepForm.Step>

          <MultiStepForm.Step>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Bio</label>
              <InputText
                value={bio}
                onChange={(e: any) => setBio(e.target.value)}
                placeholder="Parle un peu de toi..."
              />
            </div>
          </MultiStepForm.Step>
        </MultiStepForm>
      </div>
    );
  },
};
