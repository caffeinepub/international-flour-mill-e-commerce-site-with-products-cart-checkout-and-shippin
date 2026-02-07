import { useState, ReactNode } from 'react';
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
import { getPublicSiteUrl } from '../../utils/publicUrl';

interface PublishShareDialogProps {
  trigger?: ReactNode;
}

export function PublishShareDialog({ trigger }: PublishShareDialogProps) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const [copyError, setCopyError] = useState(false);
  
  // Get the public site URL using the resolver
  const siteUrl = getPublicSiteUrl();

  const handleCopyLink = async () => {
    // Reset error state
    setCopyError(false);

    // Validate URL before copying
    if (!siteUrl || siteUrl.trim().length === 0) {
      setCopyError(true);
      return;
    }

    try {
      // Try modern Clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(siteUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback for older browsers
        const input = document.createElement('input');
        input.value = siteUrl;
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.appendChild(input);
        input.select();
        input.setSelectionRange(0, 99999);
        
        const success = document.execCommand('copy');
        document.body.removeChild(input);
        
        if (success) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } else {
          setCopyError(true);
        }
      }
    } catch (err) {
      console.error('Failed to copy link:', err);
      setCopyError(true);
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
              disabled={!siteUrl || siteUrl.trim().length === 0}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  {COPY.publish.copied}
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

          {copyError && (
            <div className="text-sm text-destructive font-medium">
              {COPY.publish.copyError}
            </div>
          )}
          
          <p className="text-sm text-muted-foreground">
            {COPY.publish.helperText}
          </p>
          
          <p className="text-xs text-muted-foreground border-t pt-3">
            {COPY.publish.domainConstraints}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
