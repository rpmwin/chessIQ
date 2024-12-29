import React from 'react';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/button';

export function Profile() {
  const { user, updateProfile } = useAuthStore();
  const [editing, setEditing] = React.useState(false);
  const [formData, setFormData] = React.useState({
    lichessUsername: user?.lichessUsername || '',
    chesscomUsername: user?.chesscomUsername || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    setEditing(false);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-lg bg-white p-8 shadow">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
          <Button
            variant={editing ? 'ghost' : 'default'}
            onClick={() => setEditing(!editing)}
          >
            {editing ? 'Cancel' : 'Edit Profile'}
          </Button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <p className="mt-1 text-gray-900">{user?.email}</p>
          </div>

          {editing ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="lichessUsername"
                  className="block text-sm font-medium text-gray-700"
                >
                  Lichess Username
                </label>
                <input
                  type="text"
                  id="lichessUsername"
                  value={formData.lichessUsername}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      lichessUsername: e.target.value,
                    })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="chesscomUsername"
                  className="block text-sm font-medium text-gray-700"
                >
                  Chess.com Username
                </label>
                <input
                  type="text"
                  id="chesscomUsername"
                  value={formData.chesscomUsername}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      chesscomUsername: e.target.value,
                    })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <Button type="submit">Save Changes</Button>
            </form>
          ) : (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Lichess Username
                </label>
                <p className="mt-1 text-gray-900">{user?.lichessUsername}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Chess.com Username
                </label>
                <p className="mt-1 text-gray-900">{user?.chesscomUsername}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}