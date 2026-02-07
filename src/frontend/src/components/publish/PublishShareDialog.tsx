import { useState } from 'react';
import { Check, Copy, Share2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { COPY } from '../../constants/copy';

interface PublishShareDialogProps {
  trigger?: React.ReactNode;
}

export function PublishShareDialog({ trigger }: PublishShareDialogProps) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  
  // Get the current site URL from window.location
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(siteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            {COPY.nav.publish}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{COPY.publish.title}</DialogTitle>
          <DialogDescription>
            {COPY.publish.description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Input
              readOnly
              value={siteUrl}
              className="flex-1 font-mono text-sm"
              onClick={(e) => e.currentTarget.select()}
            />
            <Button
              type="button"
              size="sm"
              onClick={handleCopyLink}
              className="shrink-0"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-2" />
                  {COPY.publish.copyButton}
                </>
              )}
            </Button>
          </div>
          
          {copied && (
            <div className="text-sm text-success font-medium flex items-center">
              <Check className="h-4 w-4 mr-2" />
              {COPY.publish.copiedSuccess}
            </div>
          )}
          
          <p className="text-sm text-muted-foreground">
            {COPY.publish.helperText}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
